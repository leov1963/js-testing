const chai = require("chai")
const assert = require("chai").assert
const expect = require("chai").expect

const { leo, age, isCool, object, add, array, multiply } = require("../index")

// describe test

describe("Testing leo variable", function() {
    it("should return a string as a type", function() {
        // typeOf will tell me what datatype i'm testing
        assert.typeOf(leo, "string");
    })

    it("should return Leo as a result", function() {
        expect(leo).to.equal("Leo");
    })

    it("should have length of 3", function() {
        assert.lengthOf(leo, 3)
    })
})

describe("Testing age variable", function() {
    it("should return Number as a result", function() {
        assert.typeOf(age, "number")        
    })

    it("should return 27 as a result", function() {
        assert.equal(age, 27)
    })

})

describe("Testing isCool boolean", function() {
    it("should be a boolean", function() {
        assert.typeOf(isCool, "Boolean")
    })

    it("should be true", function() {
        assert.equal(isCool, true)
    })
})


// test key pair 
describe("Testing object", function() {
    it("should be an object", function() {
        assert.typeOf(object, "object")
    })

    it("class should equal SEI-111", function() {
        assert.equal(object.class, "SEI-111")
    })

})

describe("add function", function() {
    // make sure is function
    it("should be a function", function(){
        expect(add).to.be.a("function");
    });
    // check output

    it("should return 4", function() {
        expect(add(2, 2)).to.equal(4);
    });

    // check output datatype

    it("should return the datatype: number", function() {
        let num = add(2,7)
        expect(num).to.be.a("number")
    })

;})

describe("Test Array", function() {
    it("should be an array", function() {
        expect(array).to.be.a("array");
    });

    it("should have 4 datatypes", function() {
        // setup var that will give result
        let result = 0;
        for ( let i =0; i < array.length; i++) {
            let ele = array[i];
            if (typeof ele === "boolean") {
                result += 1;
            } else if (typeof ele === "string") {
                result += 1;
            } else if (typeof ele === "number") {
                result += 1;
            } else if (typeof ele === "object") {
                result += 1;
            }
        }
        // do official check
        expect(result).to.equal(4);
    });

    it("should have length of 4", function() {
        expect(array.length).to.equal(4);
    });
});

// start TDD (test driven devlopment)

// write func to multiply
// 1st write test 
// 2nd go to file where test code should live
// 3rd !!! Write the code in a way that passes the tests
// 4th export function
// 5th import function on test file
// 6th run the test (mocha) or (npm run test)

describe("Multiply Function", function() {
    it("should be a function", function() {
        expect(multiply).to.be.a("function");
    });

    it("should return 9", function() {
        expect(multiply(3,3)).to.equal(9);
        assert.equal(multiply(-1, 3), -3);
    });

    it("should have output with datatype of number", function() {
        expect(multiply(2,3)).to.be.a("number");
    });
});
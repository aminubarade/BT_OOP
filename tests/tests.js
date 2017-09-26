const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("aritGeo", function(){
    describe("Handles valid input", function(){
        it("Should return arithmetic", function(){
        assert.equal(myApp.aritGeo([3, 5, 7, 9, 11, 13, 15]),"arithmetic")
        });
        it("Should return Geometric", function(){
        assert.equal(myApp.aritGeo([2, 4, 8, 16]),"Geometirc")
        });
        it("Should return geomtric", function(){
            assert.equal(myApp.aritGeo([3,7,11,15]),"Geometric")
            });
    })
    describe("Handles invalid input", function(){
        it("Should return 'invalid input'", function(){
        assert.equal(myApp.aritGeo("demo"),"invalid input")
        });
        it("Should fail", function(){
        assert.equal(myApp.aritGeo([2, 8, 4,7, 133]),-1)
        });
        it("Should return negative 1 (-1)", function(){
            assert.equal(myApp.aritGeo(" "),0)
            });
    })
})
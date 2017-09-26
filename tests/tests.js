import {assert} from 'chai';
import arithGeo from '../src/main.js';
describe("aritGeo", function(){
    describe("Handles valid input", function(){
        it("Should return arithmetic", function(){
        assert.equal(Arithmetic.determineSequence([3, 5, 7, 9, 11, 13, 15]),"arithmetic")
        });
        it("Should return Geometric", function(){
        assert.equal(Arithmetic.determineSequence([2, 4, 8, 16]),"Arithmetric")
        });
        it("Should return geomtric", function(){
            assert.equal(Arithmetic.determineSequence([2,7,11,15]),"arithmetric")
            });
    })
    describe("Handles invalid input", function(){
        it("Should return 'invalid input'", function(){
        assert.equal(Arithmetic.determineSequence("demo"),"invalid input")
        });
        it("Should fail", function(){
        assert.equal(Arithmetic.determineSequence([2, 8, 4,7, 133]),-1)
        });
        it("Should return negative 1 (-1)", function(){
            assert.equal(Arithmetic.determineSequence(" "),0)
            });
    })
})
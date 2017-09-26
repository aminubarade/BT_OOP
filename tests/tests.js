import {assert} from 'chai';
import arithGeo from '../src/main.js';
describe("aritGeo", function(){
    describe("Handles valid input", function(){
        it("Should return arithmetic", function(){
        assert.equal(arithGeo.determineSequence([3, 5, 7, 9, 11, 13, 15]),"arithmetic")
        });
        it("Should return Geometric", function(){
        assert.equal(arithGeo.determineSequence([2, 4, 8, 16]),"geometric")
        });
        it("Should return geomtric", function(){
            assert.equal(arithGeo.determineSequence([2,7,11,15]),"arithmetic")
            });
    })
    describe("Handles invalid input", function(){
        it("Should return -1", function(){
        assert.equal(arithGeo.determineSequence([34,70,9, 9, 70]),-1)
        });
        it("Should fail", function(){
        assert.equal(arithGeo.determineSequence([2, 8, 4,7, 133]),-1)
        });
        it("Should return negative 1 (-1)", function(){
            assert.equal(arithGeo.determineSequence(""),0)
            });
    })
})
class arithGeo{            
    constructor(sequence){
    this.sequence = sequence;
    this.term1 = sequence[0];
    this.term2 = sequence[1];
    this.numLen  = sequence.length -1;//number of terms
    this.diff  = this.term2 - this.term1; 
    this.ratio  = this.term2 / this.term1;
    this.ap = true;
    this.gp = true;
    }
    isAp() {
        for (var i = 0; i < this.numLen; i++) {
            if (this.sequence[i+1] - this.sequence[i] != this.diff) {
                this.ap = false;
            }
        }
        return this.ap;
    }
    isGp() {    
        for (var j = 0; j < this.numLen; j++) {
            if (this.sequence[j+1] / this.sequence[j] != this.ratio) {
                this.gp = false;
            }
        }
        return this.gp;
    }
    determineSequence() {

        if (this.sequence.length == 0) {
            return 0;
        }
        if (this.sequence.length <= 2) {
                return -1;
        }
        if(this.isAp()){
            return 'Arithmetic';
        }
        if(this.isGp()){
            return 'Geometric';
        }
        if (!this.isAp() && ! this.isGp()) {
            return -1;
        }
    }

}
export default arithGeo;
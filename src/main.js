class arithGeo{            
    constructor(sequence){
    this.sequence = sequence;
    this.T1 = sequence[0];
    this.T2 = sequence[1];
    this.n  = sequence.length -1;//number of terms
    this.d  = this.T2 - this.T1; 
    this.r  = this.T2 / this.T1;
    this.ap = true;
    this.gp = true;
    }
    isAp(){
        for (var i = 0; i < this.n; i++) {
            if (this.sequence[i+1] - this.sequence[i] != this.d) {
                this.ap = false;
            }
        }
        return this.ap;
    }
    isGp(){    
        for (var j = 0; j < this.n; j++) {
            if (this.sequence[j+1] / this.sequence[j] != this.r) {
                this.gp = false;
            }
        }
        return this.gp;
    }
    determineSequence(){

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
let Arithmetic = new arithGeo([1,2,3,4,5]);
console.log(Arithmetic.determineSequence());
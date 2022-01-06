class Kiertekel{
    constructor(tomb){
        this.tomb = tomb;
        //console.log(this.tomb);
    }

    getVizszintes(){
        let ellx="";
        this.tomb.forEach((element,index) => {
            ellx += element.ertek;
            if(index%3==2){
                ellx += "~";
            }
        });
        let allapot = "";
        
        return ellx;
    }

    getAtlo(){
        let ell=this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek+"~";
        ell+=this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek+"~";
        return ell;
    }

    getFuggoleses(){
        let elly="";
        for(let index = 0; index <3; index++){
            elly+= this.tomb[index].ertek+this.tomb[index+3].ertek+this.tomb[index+6].ertek;
            elly += "~";
        }
        return elly;

    }

    ellenorzes(){
        let ell=this.getVizszintes()+"~"+this.getAtlo()+"~"+this.getFuggoleses();
        let allapot="";
        if(ell.indexOf("XXX")>=0){
            allapot = "X";
        }else if(ell.indexOf("OOO")>=0){
            allapot = "O";
        }
        return allapot;

    }
    
}
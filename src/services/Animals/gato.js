const Animal = require('../../model/animal')

class Gato extends Animal{
    constructor(nome, idade, familia, cor, sexo){
        super( nome,idade, familia, cor, sexo);

            Gato.gatoList.gato.push(this);    
        
    }

   static gatoList = {gato:[]}; 
}



module.exports = Gato;
const Animal = require('./animal')

class Gato extends Animal{
    constructor(nome, idade, familia, cor, sexo){
        super( nome,idade, familia, cor, sexo);

    //    this.constructor.gatoList.gato.push({
            nome: this.nome;
            idade: this.idade; 
            familia: this.familia;
            cor: this.cor;
            sexo: this.sexo;
        Gato.gatoList.gato.push(this);
        // })
        //
        
    }

   static gatoList = {gato:[]}; 
}

module.exports = Gato;
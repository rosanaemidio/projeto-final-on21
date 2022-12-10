const Animal = require('./animal')

class Gato extends Animal{
    constructor(id,nome, idade, familia, cor, sexo){
        super( id,nome,idade, familia, cor, sexo);

        this.constructor.gatoList.push({ 
            id: this.id,
            nome: this.nome,
            idade: this.idade, 
            familia: this.familia,
            cor: this.cor,
            sexo: this.sexo,
        })
    }
   static gatoList = []; 
}

module.exports = Gato;
const Animal = require('./animal')

class Cao extends Animal{
    constructor(id, nome, idade, familia, cor, sexo){
        super( id, nome,idade, familia, cor, sexo);

        this.constructor.caoList.push({
            id: this.id, 
            nome: this.nome,
            idade: this.idade, 
            familia: this.familia,
            cor: this.cor,
            sexo: this.sexo,
        })
    }
   static caoList = []; 
}

module.exports = Cao;
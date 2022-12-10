const Animal = require('../../model/animal')

class Cao extends Animal {
    constructor(nome, idade, familia, cor, sexo) {
        super(nome, idade, familia, cor, sexo);

        nome: this.nome;
        idade: this.idade;
        familia: this.familia;
        cor: this.cor;
        sexo: this.sexo;

        Cao.caoList.push(this);

    }
    static caoList = [];
}

module.exports = Cao;
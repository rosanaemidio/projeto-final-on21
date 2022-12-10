const Animal = require('./animal')

class Cats extends Animal{
    constructor(type, name, age, family, color, sexo){
        super(type, name,age, family, color, sexo);

        this.constructor.catList.push({
            type: this.type, 
            name: this.name,
            age: this.age, 
            family: this.family,
            color: this.color,
            sexo: this.sexo,
        })
    }
   static catList = []; 
}

module.exports = Cats;
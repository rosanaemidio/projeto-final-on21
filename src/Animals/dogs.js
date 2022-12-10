const Animal = require('./animal')

class Dogs extends Animal{
    constructor(type, name, age, family, color, sexo){
        super(type, name,age, family, color, sexo);

        this.constructor.dogList.push({
            type: this.type, 
            name: this.name,
            age: this.age, 
            family: this.family,
            color: this.color,
            sexo: this.sexo,
        })
    }
   static dogList = []; 
}

module.exports = Dogs;
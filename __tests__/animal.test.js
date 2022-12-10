const Animal = require('../src/model/animal')

describe('Animal', () => {

    test('Verificar se a classe foi instanciada', () => {
        const animal = new Animal()
        expect(animal instanceof  Animal).toBe(true)
    })

})
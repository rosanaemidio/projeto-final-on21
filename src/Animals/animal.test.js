const Animal = require('./animal')

describe('Animal', () => {
    test('Verificar se a classe foi instanciada', () => {
        const animal = new Animal()
        expect(animal instanceof  Animal).toBe(true)
    })
    test('Verificar se o animal possui um tipo', () => {
        const animal = new Animal('Gato')
        expect(animal.type).toBeDefined()
    })
    test('Verificar se o animal é do tipo Gato', () => {
        const animal = new Animal('Gato')
        expect(animal.type).toBe('Gato')
    })
    test('Verificar se o animal possui todas as informações', () => {
        const animal = new Animal('Gato', 'Chico', '7 anos','Felinos','Laranja', 'Dócil', 'macho')
        expect(animal).toEqual({"type": "Gato", "name": "Chico","age": "7 anos","family": "Felinos", "color": "Laranja", "humor": "Dócil","sexo": "macho"})
    })
})
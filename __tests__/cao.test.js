const Cao = require('../src/services/Animais/cao.js')

describe('Cão',() => {
        test('Verificar se o cão possui um nome', () => {
        const cao = new Cao()
        expect(cao.nome).toBeDefined()
    })
    test('Verificar se o animal é do tipo Caramelo', () => {
        const cao = new Cao('Chico', '7 anos','Caramelo')
        expect(cao.familia).toBe('Caramelo')
    })
    test('Verificar se o animal possui todas as informações', () => {
        const animal = new Cao('Chico', '7 anos','Caramelo','Amarelo', 'macho')
        expect(animal).toEqual({"name": "Chico","age": "7 anos","family": "Caramelo","color": "Amarelo","sexo": "macho"})
    })
})
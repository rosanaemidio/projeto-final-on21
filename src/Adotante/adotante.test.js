const Adotante = require('./adotante')

describe('Adotante', () => {
    test('Verificar se a classe foi instanciada', () => {
        const adotante = new Adotante()
        expect(adotante instanceof Adotante).toBe(true)
    })
    test('Deve conter um nome', () => {
        const adotante = new Adotante("José")
        expect(adotante.name).toBeDefined()
    })
    test('Deve ter idade definida', () => {
        const adotante = new Adotante("Maria", 27)
        expect(adotante.age).toBeDefined()
    })

    test('Deve ter profissão', () => {
        const adotante = new Adotante("Maria", 27, "Empreendedora")
        expect(adotante.profission).toBeDefined()
    })
})
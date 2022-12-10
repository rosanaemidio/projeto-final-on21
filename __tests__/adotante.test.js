const Adotante = require('../src/Adotante/adotante')

describe('Adotante', () => {
    test('Verificar se a classe foi instanciada', () => {
        const adotante = new Adotante()
        expect(adotante instanceof Adotante).toBe(true)
    })
})
const redline = require("readline-sync");
const Gato = require('../Animals/gato');
const Cao = require('../Animals/cao');

console.clear();


const adocao = () => {
    console.log(
    `====== Conheça nossos amiguinhios disponiveis para adoção ===== 
    1 - Gatineos
    2 - Cachorrineos
    3 - Quero adotar
    4 - Sair

    Escolha a opção desejada :) 
    `
    );

    const pergunta = redline.question();
    console.clear()

    switch(pergunta){
        case "1":
            const gatos = Gato.gatoList;
            console.table(gatos);
            adocao();
            break;

        case "2":
            const cao = Cao.caoList;
            console.table(cao);
            adocao();
            break;

        case "3":
            console.log('Então vamos adotar!')
            break;

        case "4":
            console.log('Obrigado por ter vindo e até a proxima!')
            break;

        default:
            console.log('Opção não disponível :[ ')
            adocao();
            break;
    }
}


module.exports = adocao;
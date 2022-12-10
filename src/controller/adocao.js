const readline = require("readline-sync");
const Gato = require('../services/Animals/gato');
const Cao = require('../services/Animals/cao');

console.clear();

const adocao = () => {
    console.log(
    `====== Conheça nossos amiguinhos disponiveis para adoção ===== 
    1 - Gatineos
    2 - Cachorrineos
    3 - Quero adotar
    4 - Sair

    Escolha a opção desejada :
    `
    );

    const pergunta = readline.question();
    console.clear()

    switch(pergunta){
        case "1":
            const gatos = Gato.gatoList.gato;
            console.table(gatos);
            adocao();
            break;

        case "2":
            const caes = Cao.caoList;
            console.table(caes);
            adocao();
            break;

        case "3":
            console.log('Então vamos adotar!')
            adocao();
            break;

        case "4":
            console.log('Obrigado por ter vindo e até a proxima!')
            break;

        default:
            console.log('Opção não disponível :[ ')
            adocao();
            break;
    }
};

module.exports = adocao;
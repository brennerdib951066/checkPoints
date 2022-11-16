console.log(`
    Menu do nosso Microondas:
    01 - Pipoca – 10 segundos (padrão)
    02 - Macarrão – 8 segundos (padrão)
    03 - Carne – 15 segundos (padrão)
    04 - Feijão – 12 segundos (padrão)
    05 - Brigadeiro – 8 segundos (padrão)
`);

// 02 - Conversa com Usuário

var readlineSync = require('readline-sync');

let comida = parseInt(readlineSync.question('Escolha uma opcao: '));
let tempo = parseInt(readlineSync.question('Defina um tempo de preparo: '));

// 03 - Funções 

function microondas(comidaEscolhida, tempoUsuario) {

    switch (comidaEscolhida) {
        case 1:
            if (tempoUsuario >= 30) {
                return "Kabummmm!!!"
            } else if (tempoUsuario >= 20) {
                return "A comida queimou!"
            } else if (tempoUsuario < 10) {
                return "Tempo Insuficiente!"
            } else {
                return "Prato pronto, bom apetite!!!"
            }

        case 2:
            if (tempoUsuario >= 24) {
                return "Kabummmm!!!"
            } else if (tempoUsuario >= 16) {
                return "A comida queimou!"
            } else if (tempoUsuario < 8) {
                return "Tempo Insuficiente!"
            } else {
                return "Prato pronto, bom apetite!!!"
            }

        case 3:
            if (tempoUsuario >= 45) {
                return "Kabummmm!!!"
            } else if (tempoUsuario >= 30) {
                return "A comida queimou!"
            } else if (tempoUsuario < 15) {
                return "Tempo Insuficiente!"
            } else {
                return "Prato pronto, bom apetite!!!"
            }

        case 4:
            if (tempoUsuario >= 36) {
                return "Kabummmm!!!"
            } else if (tempoUsuario >= 24) {
                return "A comida queimou!"
            } else if (tempoUsuario < 12) {
                return "Tempo Insuficiente!"
            } else {
                return "Prato pronto, bom apetite!!!"
            }

        case 5:
            if (tempoUsuario >= 24) {
                return "Kabummmm!!!"
            } else if (tempoUsuario >= 16) {
                return "A comida queimou!"
            } else if (tempoUsuario < 8) {
                return "Tempo Insuficiente!"
            } else {
                return "Prato pronto, bom apetite!!!"
            }

        default:
            return "Essa comida não foi encontrada em nosso Menu!!! "

    }
}

function nomeComida(comida) {

    if (comida == 1) {
        return "Pipoca";
    } else if (comida == 2) {
        return "Macarrão";
    } else if (comida == 3) {
        return "Carne";
    } else if (comida == 4) {
        return "Feijão";
    } else if (comida == 5) {
        return "Brigadeiro";
    }
}

// 04 - Respostas da Aplicação

let resultado = microondas(comida, tempo);

console.log(`
    Resultado do Preparo: ${resultado}.
    Detalhes:
    - Comida Escolhida: ${nomeComida(comida)}.
    - Tempo de Preparo: ${tempo} segundo(s).
`);
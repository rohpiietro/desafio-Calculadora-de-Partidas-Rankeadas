let vitoriasJogador = 81; 
let derrotasJogador = 15; 


function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}


function classificarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}


let saldoPartidas = calcularSaldo(vitoriasJogador, derrotasJogador);
let nivelJogador = classificarNivel(vitoriasJogador);

console.log("O Herói tem de saldo" +" "+ saldoPartidas +" "+ "e está no nível" +" "+ nivelJogador)
function calculoDePontos(vitorias, derrotas) {
    let saldoVitorias = (vitorias - derrotas)
    return saldoVitorias
}

let saldo = calculoDePontos(90, 5)

function rankDeHeroi(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo > 10 && saldo < 20) {
        return "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        return "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        return "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        return "Diamante";
    } else if (saldo > 90 && saldo <= 100) {
        return "Lendário";
    } else if (saldo >= 101) {
        return "Imortal";
    }
    else {
        return "Não é possível determinar o rank"
    }
}
let rank = rankDeHeroi(saldo)

console.log("O Herói tem de saldo de vitórias " + saldo, "e está no nível de " + rank)


/*
Regras de Negócio do APP
Base de Calculos:
Carne por pessoa: 400g; Se evento durar 6 hrs ou mais, considerar 650g por pessoa
                Para Crianças, considerar metade desses valores;
Cerveja por Adulto: 1200ml; SE evento durar 6hs ou mais, considerar 2000ml por pessoa;
Bebidas Diversas por pessoa: 1000ml; Se evento durar 6hrs ou mais, considerar 1500ml por pessoa;
*/


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalbebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) /2 * criancas);

    
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalbebidas/2000)}  garrafas de 2l de bebidas</p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}
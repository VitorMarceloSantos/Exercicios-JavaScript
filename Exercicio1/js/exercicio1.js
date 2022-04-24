/*1 – Calcule a média de diversas notas digitadas pelo usuário. */

let btn_adicionar = document.querySelector("#adicionar");
let btn_calcular = document.getElementById("calcular");
var arr_numeros = [];

btn_adicionar.addEventListener("click", function(){
    let numero = Number(window.document.getElementById("txtnumero").value)

    arr_numeros.push(numero); //Adiciona na ultima posição do array
    console.log(numero)
}, false);

btn_calcular.addEventListener("click",function(){
    let tela = document.querySelector("#resultado_tela")
    let media = 0;
    let soma = 0;
    
    for(let i = 0; i < arr_numeros.length; i++){
        soma += arr_numeros[i]; //usado para somar todos os valores do array
    }
   
    media = (soma / (arr_numeros.length));
    tela.textContent = `A média é: ${media} pontos.`; //Adiciona o resultado na Tela
} ,false);


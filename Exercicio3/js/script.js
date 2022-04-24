//2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.

let arr_num = [];
let btn_adicionar = document.querySelector("#adicionar");
let btn_calcular = document.querySelector("#calcular");

btn_adicionar.addEventListener("click",function(){
    let num = Number(document.querySelector("#txtnumero").value);
    arr_num.push(num);
} ,false);

btn_calcular.addEventListener("click",function(){
    let arr_quad = [];
    let tela = document.querySelector("#resultado_tela");
    arr_quad = arr_num.map(function(num){
        return num * 2;
    });
    for(let i = 0; i < arr_quad.length; i++){
        tela.innerHTML += `<p>O quadrado do número ${arr_num[i]} é ${arr_quad[i]}.</p><br>`
    }
} ,false);
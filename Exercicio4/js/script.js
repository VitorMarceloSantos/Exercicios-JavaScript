/* 3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o. */


let arr_num = [];
let btn_adicionar = document.querySelector("#adicionar");
let btn_calcular = document.querySelector("#calcular");

btn_adicionar.addEventListener("click",function(){
    let num = Number(document.querySelector("#txtnumero").value);
    arr_num.push(num);
} ,false);

btn_calcular.addEventListener("click",function(){
    let tela = document.querySelector("#resultado_tela"); 
    let maior = 0;
    let menor = arr_num[0]; //vai receber o primeiro valor do array, para comparar com os demais
    for(let i = 0; i < arr_num.length; i++){
        if(arr_num[i] > maior){
            maior = arr_num[i];
        } 
    }
    for(let i = 1; i < arr_num.length; i++){ //vai começar contar a partir do 2° elemento do array, pois o 1° elemento foi atribuido a variavel menor.
        if(arr_num[i] < menor){
            menor = arr_num[i];
        } 
    }
    tela.innerHTML += `<p>Maior número: ${maior}.</p><p>Menor número: ${menor}.</p>`
} ,false);
/* 4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.*/


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
    let menor = 0; //vai receber o primeiro valor do array, para comparar com os demais
    for(let i = 0; i < arr_num.length; i++){
        if(arr_num[i] >= 18){ //verificar se o valor da idade é maior ou igual a 18
            maior += 1;
        }else{
            menor += 1;
        }
    }
    tela.innerHTML += `<p>Quantidade de pessoas com idade maior ou igual a 18 anos: ${maior}.</p><p>Quantidade de pessoas com idade menor que 18 anos: ${menor}.</p>`
} ,false);
/* 6 – Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes 
digitados, porém de maneira invertida (do último para o primeiro).*/


let arr_nome = [];
let btn_adicionar = document.querySelector("#adicionar");
let btn_finalizar = document.querySelector("#finalizar");

btn_adicionar.addEventListener("click",function(){
    let nome = document.querySelector("#txtnome").value;
    arr_nome.push(nome);
} ,false);

btn_finalizar.addEventListener("click",function(){
    let tela = document.querySelector("#resultado_tela"); 
    let arr_inverso = []; //irá receber os valores do arr_nome de maneira iversa

    arr_inverso = arr_nome.slice(0).reverse(); //o metodo slice(0) irá fazer um clone de todos o array, e a função reverse() irá inverter a ordem.
    
    tela.innerHTML += `<p>Nomes na ordem que foram digitados: ${arr_nome}.</p><p>Nomes na ordem inversa: ${arr_inverso}.</p>`
} ,false);
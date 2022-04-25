/* 7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano. */

let btn_adicionar = document.querySelector("#adicionar");

btn_adicionar.addEventListener("click",function(){
    let data = document.querySelector("#txtnumero").value;
    let tela = document.querySelector("#resultado_tela");
    let arr_data = [] //irá transformar a data string como data array

    let dataFormatada = /^[0-3]{1}[0-9]{1}[/][0-1]{1}[0-9]{1}[/][0-2]{1}[0-9]{1}[0-9]{1}[0-9]{1}/; //Expressão Regular : O ACENTO CIRCUFLEXO ELE DÁ A POSSIBILIDADE DE COLOcAR VALORES BEM ESPECIFICOS(ENTRE CHAVES NUMEROS PERMITIDOS E A BARRA, ENTRE COLCHETES A QUANTIDADE PERMITIDA)
    
    arr_data = data.split("/");//separa os indices em 0[dia],1[mês],2[ano] 
    /*Utilizando o metodo parseInt(string, base 10) para converter a string em um número inteiro de base 10.  */
    let dia = parseInt(arr_data[0],10); // dia em número
    let mes = parseInt(arr_data[1],10); // mês em número
    let ano = parseInt(arr_data[2],10); // ano em número
   
    let anoAtual = new Date(); //o metodo Date(.getHours()) vai passar o ano atual
    //Validando a data
    if((dia > 31)||(mes > 12)||((ano > anoAtual.getFullYear())||(ano < 1900))){ //Ano de nascimento tem que ser maior que 1900
        tela.innerHTML += `<p>[ERRO] - Data Inválida!</p>`;
    }else{
        tela.innerHTML += `<p>Dia: ${dia} - Mês: ${mes} - Ano:${ano}</p>`;
    }
} ,false);

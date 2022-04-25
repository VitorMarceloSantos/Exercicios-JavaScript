/* 7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano. */

let btn_adicionar = document.querySelector("#adicionar");

btn_adicionar.addEventListener("click",function(){
    let data = document.querySelector("#txtnumero").value;
    let arr_data = [] //irá transformar a data string como data array

    let dataFormatada = /^[0-3]{1}[0-9]{1}[/][0-1]{1}[0-9]{1}[/][0-2]{1}[0-9]{1}[0-9]{1}[0-9]{1}/; //Expressão Regular : O ACENTO CIRCUFLEXO ELE DÁ A POSSIBILIDADE DE COLOcAR VALORES BEM ESPECIFICOS(ENTRE CHAVES NUMEROS PERMITIDOS E A BARRA, ENTRE COLCHETES A QUANTIDADE PERMITIDA)
    arr_data = data.split("/");//separa os indices em 0[dia],1[mês],2[ano] 
    
    let dia = Number(arr_data[0].value); // dia em número
    let mes = Number(arr_data[1].value); // mês em número
    let ano = Number(arr_data[2].value); // ano em número
   
    console.log(arr_data)
    console.log(typeof dia)
    console.log(dia)
    if(dia > 31){
        console.log("Dia invalido.")
    }
    

    

    console.log(dataFormatada.test(data))
} ,false);
/*
    tela.innerHTML += `<p>Maior número: ${maior}.</p><p>Menor número: ${menor}.</p>`
*/
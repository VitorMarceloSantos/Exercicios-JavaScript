/* 5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas. 
Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do 
sexo feminino. Mostre também qual é a maior altura e se essa altura é de um 
homem ou uma mulher*/


let arr_num = [];
let btn_adicionar = document.querySelector("#adicionar");
let btn_calcular = document.querySelector("#calcular");

btn_adicionar.addEventListener("click",function(){
    let nome = document.querySelector("#nome_txt").value;
    let altura = Number(document.querySelector("#altura_txt").value);
    let sexo = document.getElementsByName("sexo");
    
    class Formulario{ //criando um objeto formulário, onde vai ter as informações dos participante
        constructor(nome, altura, sexo){
            this.nome = nome;
            this.altura = altura;
            this.sexo = sexo
        }
        set alterarNome(value){//metodos setter: alteram os valores
            this.nome = value
        }
        set alterarAltura(value){
            this.altura = value;
        }
        alterarSexo(sexo){
            if(this.sexo == 0){
                this.sexo = 1;
            }else{
                this.sexo = 0;
            }
        }
        get mostrarNome(){ //métodos getter: mostram os valores
            return this.nome;
        }
        get mostrarAltura(){
            return this.altura;
        }
        get mostrarSexo(){
            if(sexo == 0){
                return console.log("Masculino");
            }else{
                return console.log("Femino");
            }
        }
    }
    arr_num.push(new Formulario(nome, altura, sexo)); //Criando um array com os dados do formulário
} ,false);

btn_calcular.addEventListener("click",function(){
    let tela = document.querySelector("#resultado_tela"); 
    let homens = 0;
    let mulheres = 0;
    let pos_altura;
    let maior_altura = 0;
    
    
    for(let i = 0; i < arr_num.length; i++){
        if(arr_num[i].sexo[0].checked){ //Verificar a quantidade homens e mulheres
            homens += 1;
        }else{
            mulheres += 1;
        }
        if(arr_num[i].altura > maior_altura){
            maior_altura = arr_num[i].altura; //vai receber a maior altura
            pos_altura = i; //vai armazenar a posição no array da maior altura
        }
    }

    tela.innerHTML += ` <p>Total de Homens: ${homens} - Total de Mulheres: ${mulheres}.</p>`;
    tela.innerHTML += `<p>A maior altura pertece a: <br>Nome: ${arr_num[pos_altura].nome} - Altura: ${maior_altura}</p>`;
} ,false);
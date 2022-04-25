/* 5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher*/

let arr_num = [];
let btn_adicionar = document.querySelector("#adicionar");
let btn_calcular = document.querySelector("#calcular");
let homens = 0;
let mulheres = 0;

btn_adicionar.addEventListener("click",function(){
    let nome = document.querySelector("#nome_txt").value;
    let altura = Number(document.querySelector("#altura_txt").value);
    let sexo_inicial = document.getElementsByName("sexo"); //array de duas posições
    let sexo_final;
    
    class Formulario{ //criando um objeto formulário, onde vai ter as informações dos participante
        constructor(nome, altura, sexo){
            this.nome = nome;
            this.altura = altura;
            this.sexo = sexo;
        }
        set alterarNome(value){//metodos setter: alteram os valores
            this.nome = value
        }
        set alterarAltura(value){
            this.altura = value;
        }
        set alterarSexo(value){
            this.sexo = value;
        }
        get mostrarNome(){ //métodos getter: mostram os valores
            return this.nome;
        }
        get mostrarAltura(){
            return this.altura;
        }
        get mostrarSexo(){
            return this.sexo;
        }
    }
    if(sexo_inicial[0].checked){ //atribuir o sexo a cada pessoa
        sexo_final = "Masculino";
        homens += 1; //contador masculino
    }else{
        sexo_final = "Feminino";
        mulheres += 1; //contador feminino
    }
    arr_num.push(new Formulario(nome, altura, sexo_final)); //Criando um array com os dados do formulário
} ,false);

btn_calcular.addEventListener("click",function(){
    let tela = document.querySelector("#resultado_tela"); 
    let pos_altura;
    let maior_altura = 0;


    for(let i = 0; i < arr_num.length; i++){ //Faz com atribua o sexo(string) para cada um 
        if(arr_num[i].altura > maior_altura){
            maior_altura = arr_num[i].altura; //vai receber a maior altura
            pos_altura = i; //vai armazenar a posição no array da maior altura
        }
    }
    tela.innerHTML += ` <p>Total de Homens: ${homens} - Total de Mulheres: ${mulheres}.</p>`;
    tela.innerHTML += `<p>A maior altura pertece a: <br>Nome: ${arr_num[pos_altura].nome} - Altura: ${maior_altura}cm - Sexo: ${arr_num[pos_altura].sexo}</p>`;

} ,false);
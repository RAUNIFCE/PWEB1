/*const readline =require("readline")
const rl =readline.createInterface({//codigo para capturar entrada do teclado assícrono, mas como pode ser feio pra programar melhor usar o readline-sync
  input:process.stdin,
  output:process.stdout
});*/
const input = require("readline-sync");//capturador de entrada síncrono tipo C e Java,cuidado ele converte para string automaticamente!!! 
// pra usar digite npm install readline-sync no terminal, sequiser no vscode aparcer os acentos utilize o chcp 65001 no terminal

//As 4 operações Simples
let a=2,b=4;
console.log(a+b,a-b,a*b,a/b," exibindo resultados usando duas variáveis");

//Absorvendo entradas string e Number pelo teclado
let nome = input.question("Nome: ");//pega a entrada string e atribui a variável nome
console.log(nome);
let num = Number(input.question("digite um número pra passar as 4 operações com o 2: "));//esse aqui pega já convertendo para número
console.log(num+2,num-2,num*2,num/2," exibindo resultados usando duas variáveis");

//Arrow Functions devem sempre serem const, o => indica que retornará oque está a direita
//sem parâmetro
const ola = () => console.log("Oi");
ola()
//1 parâmetro
const dobrando=(n)=>n*2;
console.log(dobrando(5));
//2 vários parâmetros
const multiplicando3numeros=(x,y,z)=>x*y*z;
console.log(multiplicando3numeros(4,5,6))
//diferenciada
const fatorial=(x)=>{
    let resultado=x;
    for(let i=x-1;i>0;i--){
        resultado*=i
    }
    return resultado;
}
console.log(fatorial(7))

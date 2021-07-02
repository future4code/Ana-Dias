/////////////////Aula 04 - Operadores e Lógica de Programação/////////////////
////////////////Questão 1

/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) 

-------- Respostas
1. False
2. True
3. False */

////////////////Questão 2
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/*---------resposta

As variáveis são do tipo string por padrão, então ao utilizar o símbolo '+'
o computador entendeu que era uma concatenação de strings, e não uma soma de numbers como ele queria.
Então ao digitar qualquer número o computador irá juntá-los e não somá-los.

////////////////Questão 3

----------resposta

Ele deve apenas converter a variável de string para number*/

////////////////Escrita de código
////////////////Questão 1
//a) Pergunte a idade do usuário

let idade = prompt("Qual a sua idade?")
console.log(idade)

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo(a)?")
console.log(idadeMelhorAmigo)

//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 

let idadeMaiorQue = prompt("Sua idade é maior do que a do seu melhor amigo?")
let resultado = idade>idadeMelhorAmigo
console.log(idadeMaiorQue)
console.log(resultado)

//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

let diferencaIdade = idade - idadeMelhorAmigo
console.log(diferencaIdade)


////////////////Questão 2

//a)Peça ao usuário que insira um número par

let numeroPar = prompt("Insira um número par!")

//b) Imprima na console o resto da divisão desse número por 2.

console.log(numeroPar % 2)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código
//Todos tem resto 0 por serem pares

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// aparece o erro de sintaxe "redeclaration of let idade"

////////////////Questão 3

//Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

let idadeEmAnos = prompt("Qual a sua idade em anos?")
console.log(idadeEmAnos)

console.log(idadeEmAnos * 12)
console.log(idadeEmAnos * 365)
console.log(idadeEmAnos * 8.760)

////////////////Questão 4

let numero1 = prompt("Insira um número!")
let numero2 = prompt("Insira outro número")
console.log(numero1>numero2)
console.log(numero1===numero2)
console.log(numero1/numero2==0)
console.log(numero2/numero1==1)

////////////////DESAFIO////////////////


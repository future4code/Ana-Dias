//Exercício 01

let a = 10
let b = 10

console.log(b)
b = 5
console.log(a,b)

//Resposta 01
10

10,5

//Exercício 02

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a,b,c)

//Resposta 02

10, 10, 10

//Exercício 03

let p = prompt("Quantas horas você trabalha por dia?")

let t = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${t/p} por hora`)

//Resposta 03

let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")

let salarioPorDia = prompt("Quanto você recebe por dia?")

alert('Voce recebe ${salarioPordia/horasDeTrabalho} por hora')

//Resposta 04 - escrita de código

//a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nomeCompleto

console.log(typeof nomeCompleto)

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idadeAtual

console.log(typeof idadeAtual)

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

//R.: Undefined e undefined

//d) Por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//R.: Porque a variável não apresenta um valor

//Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
//não rodou

//g)Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

let nomeCompleto = Ana Beatriz de Morais Dias

let idadeAtual = 22

nomeCompleto = prompt("Qual o seu nome completo?")

console.log(nomeCompleto)

idadeAtual = prompt("Qual a sua idade atual?")

console.log(idadeAtual)

console.log("Olá" nomeCompleto,"você tem" idadeAtual "anos")


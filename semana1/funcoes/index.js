///////////////////////////////////////////// Funções /////////////////////////////////////////////

////////////////////////////////Exercícios de interpretação de código
//Questão 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) Será impresso os números 10 e 50

//b) Seria impresso apenas um erro de sintaxe

//Questão 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a) Essa função recebe algum texto escrito pelo usuário, e se esse texto não for 'cenoura' ele retorna com um booleano escrito false

//b) true/true/true

////////////////////////////////Exercícios de escrita de código

//Questão 1
//a)
function minhasInformacoes(){
    console.log("Eu sou Ana Beatriz, tenho 22 anos, moro no Rio de Janeiro e sou estudante.")
}
minhasInformacoes()

//b)

function informacoesUsuario(nome){
    console.log("Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}")
}
informacoesUsuario()

//Questão 2
//a)
function doisNumeros(num1, num2){
    const soma = num1 + num2
    return soma
    console.log("Resultado")
}

//b)
let num1 = prompt("Diga um número")
let num2 = prompt("Diga outro número")

function doisNumeros(num1, num2){
    return num1 >= num2  
}

let resultado = doisNumeros()
console.log(resultado)


//c)
const par = numero1%2===0
const impar = numero1%2!==0

function numero1 (){
    return resultado
}
let resultado = par||impar
console.log(resultado)


//d)
let mensagemUsuario = prompt("Escreva uma mensagem")

function mensagem(mensagemUsuario){
    return mensagemUsuario
}
const maiuscula = mensagemUsuario.toUpperCase()
const tamamho = mensagemUsuario.length()

console.log("mensagemUsuario")


//Questão 3

let num1 = prompt("Escolha um numero")
console.log(num1)
let num2 = prompt("Escolha outro numero")
console.log(num2)


function somaDoisNumeros(num1, num2){
    
    return soma
}
const soma = num1 + num2
console.log(soma)

function subtraiDoisNumeros(num1, num2){
    return subtrai
}
const subtrai = num1 - num2
console.log(subtrai)

function multiplicaDoisNumeros(num1, num2){
    return multiplica
}
const multiplica = num1 * num2
console.log(multiplica)

function divideDoisNumeros(num1, num2){
    return divide
}
const divide = num1 / num2
console.log(divide)

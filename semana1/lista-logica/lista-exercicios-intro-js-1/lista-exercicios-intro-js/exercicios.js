// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Escreva a altura do retângulo!"))
let largura = Number(prompt("Escreva a largura do retângulo!"))

let areaDoRetangulo = altura * largura

console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Escreva em que ano estamos"))
let anoNascimento = Number(prompt("Em que ano você nasceu?"))

let idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let imc = peso / (altura * altura)
return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nomeDoUsuario = prompt("Qual o seu nome?")
  let idadeDoUsuario = prompt("Qual a sua idade?")
  let emailDoUsuario = prompt("Qual o seu e-mail?")
  let mensagem = `Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`

  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita0 = prompt('Digite a sua primeira cor favorita') 
  const corFavorita1 = prompt("Digite a sua segunda cor favorita")
  const corFavorita2 = prompt("Digite a sua terceira cor favorita")

  const todasAsCoresFavoritas = [corFavorita0, corFavorita1, corFavorita2]

 console.log(todasAsCoresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let maiuscula = string.toUpperCase()
  return maisucula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let quantidadeDeIngressos = (custo / valor)

  return quantidadeDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  let checarTamanho = (string1.length) === (string2.length)
  return checarTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoElemento = array[array.length -1]

return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let primeiroElemento = array[0]
  let ultimoElemento = array[array.length -1]
  array[0] = ultimoElemento
  array[array.length -1] = primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let viraMinusculaString1 = string1.toLowerCase()
let viraMaiusculaString2 = string2.toLowerCase()

let comparacao = viraMinusculaString1 === viraMinusculaString2

return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoDoUsuario = Number(prompt("Qual o ano atual?"))
const anoNascimentoUsuario = Number(prompt("Qual o seu ano de nascimento?"))
const anoEmissaoDeIdentidade = Number(prompt("Qual o ano de emissão da sua identidade?"))

const idadeDoUsuario = anoDoUsuario - anoNascimentoUsuario
const tempoEmissaoIdentidade = anoDoUsuario - anoEmissaoDeIdentidade

const renovacao = ((idadeDoUsuario <= 20) && (tempoEmissaoIdentidade >= 5)) || ((idadeUsuario > 20) && (idadeDoUsuario < 50) && (tempoEmissaoIdentidade >= 10)) || ((idadeDoUsuario > 50) && (tempoEmissaoIdentidade > 15))

console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiploDe400 = ano % 400 === 0
  let multiplosDe100 = ano % 100 === 0
  let multiplosDe4 = ano % 4 === 0

  let anoBissexto = multiploDe400 || multiplosDe4 && multiplosDe100

  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

    let idadeInscricao = prompt("Você tem mais de 18 anos?") === "sim"
    let ensinoMedioInscricao = prompt("Você tem ensino médio completo?") === sim
    let disponibilidadeInscricao = prompt("Você tem disponibilidade exclusiva durante os horários do curso?") === "sim"

    let resultado = idadeInscricao && ensinoMedioInscricao && disponibilidadeInscricao

    console.log(resultado)
}
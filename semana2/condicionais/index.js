////////////////Condicionais

//>>>>>>>>>>>>>>>>>Interpretação de código

//Questão 1

const respostaDoUsuario = prompt('Digite o número que você quer testar')
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log('Passou no teste.')
} else {
  console.log('Não passou no teste.')
}

//a. Ele pede para o usuário digitar um número,
// Se este número for par, o usuário passa no teste, mas
// se for ímpar, ele não passa.

//b. Para números pares

//c. Para números ímpares

//Questão 2

let fruta = prompt('Escolha uma fruta')
let preco
switch (fruta) {
  case 'Laranja':
    preco = 3.5
    break
  case 'Maçã':
    preco = 2.25
    break
  case 'Uva':
    preco = 0.3
    break
  case 'Pêra':
    preco = 5.5
    break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break
}
console.log('O preço da fruta ', fruta, ' é ', 'R$ ', preco)

//a. Para retornar o preço da fruta digitada no prompt
//b. Será 2.25
//c. Retornará um erro

//Questão 3
const numero = Number(prompt('Digite o primeiro número.'))

if (numero > 0) {
  console.log('Esse número passou no teste')
  let mensagem = 'Essa mensagem é secreta!!!'
}

console.log(mensagem)

//a. Está pedindo ao usuário que digite um número utilizando o prompt. Este número será guardado em 'numero'.
//b. A mensagem seria "essa mensagem é secreta"
//c. Não.

//>>>>>>>>>>>>>>>>>Escrita de código
//Questão 1

const idade = Number(prompt('Qual a sua idade?'))

if (idade > 18) {
  console.log('Você pode dirigir!')
} else {
  console.log('Você não pode dirigir :(')
}

//Questão 2

const turno = prompt(
  "Digite 'M' se você estuda de manhã, 'V' de tarde ou 'N' se estuda de noite."
)

if (M) {
  console.log('Bom dia!')
} else if (V) {
  console.log('Boa tarde!')
} else if (N) {
  console.log('Boa noite!')
}

//Questão 3
const turno = prompt(
  "Digite 'M' se você estuda de manhã, 'V' de tarde ou 'N' se estuda de noite."
)

case 'M' {
  console.log('Bom dia!')
  break
case 'V'{
  console.log('Boa tarde!')
  break
}
case 'N' {
  console.log('Boa noite!')
  break
}
  break
  default:
    console.log('Ninguém estuda esse horário!')

//Questão 4

const idade = Number(prompt('Qual a sua idade?'))

if (idade > 18) {
  console.log('Você pode dirigir!')
} else {
  console.log('Você não pode dirigir :(')
}


const filmeAssistido = prompt(
  'Qual o gênero do filme que você gostaria de assistir?'
)
const precoIngresso = Number(prompt('Quanto custa o ingresso?'))

  if (filmeAssistido === fantasia && precoIngresso < 15) {
  console.log('Bom filme!')
} 
  else if (filmeAssistido !== fantasia && precoIngresso >= 15) {
  console.log('Escolha outro filme...')
}

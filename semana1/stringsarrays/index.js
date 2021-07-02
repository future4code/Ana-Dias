///////////////////////////////////////  Aula 05 - Strings e Arrays
/*
////////////Exercícios de interpretação de código

 let array
console.log('a. ', array)
//resposta: undefined

array = null
console.log('b. ', array)
//resposta: null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//resposta: 11

let i = 0
console.log('d. ', array[i])
//resposta: 3

array[i+1] = 19
console.log('e. ', array)
// resposta:[ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

const valor = array[i+6]
console.log('f. ', valor)

//resposta: 9


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


//resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27

////////////Exercícios de escrita de código
//Questão 1


let nome = prompt("Qual seu nome?")
console.log(nome)
let email = prompt("Qual o seu e-mail?")
console.log(email)

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}`)
*/
// Questão 2

let comidasPreferidas = ['chocolate', ' bife', ' lasanha', ' camarão', ' peixe']
console.log(comidasPreferidas)
console.log(`Essas são as minha comidas preferidas: ${comidasPreferidas}`)

let comidaPreferidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas.splice(1)
console.log(comidaPreferidaUsuario)

/*
// Questão 3

let arrayVazio = []
let listaDeTarefas = arrayVazio

let tarefa1 = prompt("Diga 1 tarefa que você precisa realizar hoje")
console.log(tarefa1)

let tarefa2 = prompt("Diga a 2ª tarefa que você precisa realizar hoje")
console.log(tarefa2)

let tarefa3 = prompt("Diga a 3ª tarefa que você precisa realizar hoje")
console.log(tarefa3)

arrayVazio.push(listaDeTarefas)
console.log(arrayVazio)

let tarefaConcluida = prompt("Digite o numero da tarefa que você já realizou")
arrayVazio.splice(tarefaConcluida)
console.log(tarefaConcluida)

*/
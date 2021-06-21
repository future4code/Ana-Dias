//***************Objetos***************

//Exercícios de interpretação de código

//1.
const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
        ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
        ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


//R.: Matheus Nachtergaele, Virginia Cavendish, Canal: 'globo', horário: "14h"

//2. 

const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a. Nome: 'Juca', idade: 3, Raca: 'SRD'
//nome: 'Juba', idade: 3, Raca: 'SRD'
//nome: 'Jubo', idade: 3, Raca: 'SRD'

//b. repete as mesmas chaves utilizadas no objeto anterior


//3.

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a. Nome: 'Caio'. idade: 23, false
// Nome: 'Caio'. idade: 23, undefined 
//b. Apareceu pois a altura não tem valor definido na função


//Exercícios de interpretação de código

// 1.
//a. 

const pessoa = {
    nome: "Amanda",
    apelidos: ["amandinha", "mandinha", "mandi"],
}
function pessoaObjeto (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos}`)
}

let imprime = pessoaObjeto (pessoa)
console.log(imprime)



//2

const pessoa = {
    nome: "Amanda",
    apelidos: ["amandinha", "mandinha", "mandi"],

const novaPessoa = {...pessoa, apelidos: ["mandy", "manda, "amy"]}
    imprime(novaPessoa)



// 2. 

//a.

    const pessoa1 = {
        nome: "Lucas",
        idade: "25",
        profissão: "professor"
    }

    const pessoa2 = {
        nome: "Ana",
        idade: 22,
        profissão: "desenvolvedora"
    }

//b.

function arrayPessoas(pessoa) {
    let resultadoArray = [pessoa.nome, pessoa.nome.lenght, pessoa.idade, pessoa.profissão, pessoa.profissão.length]

    console.log(resultadoArray)

    return resultadoArray

}

//3.

            let carrinho = []
        
            const fruta1 = {
                nome: "Morango",
                disponivel: "true"
            }
            
            const fruta2 = {
                nome: "Abacaxi",
                disponivel: "True"
            }

            const fruta3 = {
                nome: "Banana",
                disponivel: "True"
            }
    
            function adicionaNoCarrinho (fruta){
                carrinho.push(fruta)
            }
            
            adicionaNoCarrinho(fruta1)
            adicionaNoCarrinho(fruta2)
            adicionaNoCarrinho(fruta3)
    
            console.log(carrinho)

    
// >>>>>>>> Callback e Funções de Array

// >>>> Exercícios de interpretação de código

//1. a. Imprimirá os nomes e apelidos junto com o array original

//2. Será impresso o array ["Amanda Rangel", "Laís Petra", "Letícia Chijo"] (igual os nomes do array original)

//3. Imprimirá os itens que não possuem os caracteres 'chijo'

//>>>>>>>>  Exercícios de escrita de código
//1.a.

const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]

let arrayNomes = pets.map(nomePets => {
  return nomePets.nome
})

console.log(arrayNomes)

//b.
let arraySalsicha = pets.filter(salsicha => {
  return salsicha.raca === 'Salsicha'
})

console.log(arraySalsicha)

//c.
let mensagemPoodle = pets.filter(poodle => {
  if (poodle.raca === 'Poodle') {
    console.log(`Você ganhou um cupom de 10% para tosar o/a ${poodle.nome}`)
  }
})

//2.

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

// EXERCÍCIO 01
function inverteArray(array) {
  let arrayNovo = []
  const tamanho = array.length
  for (let i = tamanho - 1; i >= 0; i--) {
    arrayNovo.push(array[i])
  }
  console.log(arrayNovo)
  return arrayNovo
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayParesElevado = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayParesElevado.push(Math.pow(array[i], 2))
    }
  }
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let ArrayVazio = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      ArrayVazio.push(array[i])
    }
  }

  // EXERCÍCIO 04
  function retornaMaiorNumero(array) {
    let maiorElemento = -Infinity

    array.forEach(elemento => {
      if (elemento > maiorElemento) {
        maiorElemento = elemento
      }
    })
  }

  // EXERCÍCIO 05
  function retornaQuantidadeElementos(array) {
    return array.length
  }

  // EXERCÍCIO 06
  function retornaExpressoesBooleanas() {}

  // EXERCÍCIO 07
  function retornaNNumerosPares(n) {}
  const nPrimeirosPares = []

  for (let i = 0; i < n; i++) {
    nPrimeirosPares.push(i * 2)
  }

  return nPrimeirosPares
}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  const lados = [a, b, c]
  const ladosDiferentes = [...new Set(lados)]

  switch (ladosDiferentes.length) {
    case 3:
      return 'Escaleno'
      break

    case 2:
      return 'Isósceles'
      break

    default:
      return 'Equilátero'
      break
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const listaOrdenada = ordenaArray(array)

  return [listaOrdenada[listaOrdenada.length - 2], listaOrdenada[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {}

// EXERCÍCIO 12
function filmeFavorito() {
  return {
    nome: 'Kill Bill',
    ano: 2003,
    diretor: 'Quentin Tarantino',
    atores: ['Uma Thurman', 'David Carradine', 'Lucy Liu']
  }
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {}

// EXERCÍCIO 17C
function verificaParidade(array) {}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}

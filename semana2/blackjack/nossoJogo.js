/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vindas ao jogo de Blackjack!')
if (confirm('Deseja iniciar uma nova rodada?')) {
  const carta = comprarCarta()
  const cartasMao1 = []
  const cartasMao2 = []
} else {
  console.log('O jogo acabou.')
}

let jogo = confirm('Quer iniciar uma nova rodada?')
if (jogo) {
  let carta1Humano = comprarCarta()
  let carta2Humano = comprarCarta()
  let carta1Computador = comprarCarta()
  let carta2Computador = comprarCarta()

  let pontuacaoHumano = carta1Humano.valor + carta2Humano.valor
  let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

  console.log(
    `Humano - cartas: ${carta1Humano.texto} ${carta2Humano.texto} - ${pontuacaoHumano}`
  )
  console.log(
    `Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`
  )

  if (pontuacaoHumano > pontuacaoComputador) {
    console.log('O humano ganhou!')
  } else if (pontuacaoComputador > pontuacaHumano) {
    console.log('O computador ganhou!')
  }
} else {
  console.log('O jogo acabou')
}

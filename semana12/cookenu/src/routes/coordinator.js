export const goToLogin = history => {
  history.push('/login')
}

//chamo essa função toda vez que eu queira um botão que redirecione para o login

export const goToLogin = history => {
  history.push('/cadastro')
}

export const goToAddRecipes = history => {
  history.push('/adicionar-receita')
}

export const goToRecipeDetail = history => {
  history.push(`/detalhe/${id}`)
}

export const goToRecipesList = history => {
  history.push('/')
}

import React from 'react'
import Button from '@material-ui/core/Button'
import useProtectedPage from '../../hooks/useProtectedPage'

const RecipesListPage = () => {
  useProtectedPage()
  return (
    <div>
      <h2>RecipesListPage</h2>
      <Button variant="contained" color="primary">
        Voltar
      </Button>
    </div>
  )
}

export default RecipesListPage

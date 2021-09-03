import React from 'react'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled'
import logo from '../../assets/logo.jpg'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'

const LoginPage = () => {
  const history = useHistory()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          type={'submit'}
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToSignUp(history)}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage

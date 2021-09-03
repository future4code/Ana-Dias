import React from 'react'
import { InputsContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: '', password: '' })

  const onSubmitForm = event => {
    console.log(form)
    event.preventDefault()
  }

  const login = () => {
    axios
      .post(`${BASE_URL}/user/login`, form)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        clear()
      })
      .catch(err => alert('Erro no login'))
  }

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          type={'email'}
          name={'email'}
          value={form.email}
          onChange={onChange}
          label={'E-mail'}
          variant={'outlined'}
          fullWidth
          margin={'normal'}
          required
        />

        <TextField
          type={'password'}
          name={'password'}
          value={form.password}
          onChange={onChange}
          label={'Senha'}
          variant={'outlined'}
          margin={'normal'}
          fullWidth
          required
        />
        <Button
          type={'submit'}
          fullWidth
          variant={'contained'}
          color={'primary'}
        >
          Fazer Login!
        </Button>
      </form>
    </InputsContainer>
  )
}

export default LoginForm

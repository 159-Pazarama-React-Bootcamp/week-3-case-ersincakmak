import React from 'react'
import { TextField, PassswordField } from '../../components/Form'
import Button from '../../components/Button'
import SignInUpContainer from '../../components/SingInUpContainer'
import { LoginMessage } from './style'
import Link from '../../components/Link'

const RegisterPage = () => {
  return (
    <SignInUpContainer title="Register">
      <TextField label="Username" placeholder="username" type="text" />
      <TextField label="Email" placeholder="username@gmail.com" type="email" />
      <PassswordField label="Password" placeholder="Password" />
      <PassswordField label="Confirm Password" placeholder="Confirm Password" />
      <Button fullWidth size="md">
        Register
      </Button>
      <LoginMessage>
        Already have an account?{' '}
        <Link to="/login" fontWeight="600">
          Login
        </Link>
      </LoginMessage>
    </SignInUpContainer>
  )
}

export default RegisterPage

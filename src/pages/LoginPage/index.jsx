import React from 'react'
import Button from '../../components/Button'
import ButtonWithIcon from '../../components/ButtonWithIcon'
import PasswordField from '../../components/Form/PassswordField'
import TextField from '../../components/Form/TextField'
import Link from '../../components/Link'
import SignInUpContainer from '../../components/SingInUpContainer'
import { ContinueText, LoginOptions, RegisterMessage } from './style'
import { FcGoogle } from 'react-icons/fc'
import { RiGithubFill, RiFacebookCircleFill } from 'react-icons/ri'

const LoginPage = () => {
  return (
    <SignInUpContainer title="Login">
      <TextField type="email" label="Email" placeholder="username@gmail.com" />
      <PasswordField label="Password" placeholder="Password" />
      <Link to="#" fontSize="sm" fontWeight="normal">
        Forgot Password?
      </Link>
      <Button size="md" fullWidth>
        Sign in
      </Button>
      <ContinueText>or continue with</ContinueText>
      <LoginOptions>
        <ButtonWithIcon>
          <FcGoogle />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <RiGithubFill />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <RiFacebookCircleFill color="#059BE5" />
        </ButtonWithIcon>
      </LoginOptions>
      <RegisterMessage>
        Don't have an account yet?{' '}
        <Link to="/register" fontSize="md" fontWeight="600">
          Register for free
        </Link>
      </RegisterMessage>
    </SignInUpContainer>
  )
}

export default LoginPage

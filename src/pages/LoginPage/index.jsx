import React from 'react'
import Button from '../../components/Button'
import ButtonWithIcon from '../../components/ButtonWithIcon'
import { TextField, PasswordField } from '../../components/Form'
import Link from '../../components/Link'
import SignInUpContainer from '../../components/SingInUpContainer'
import { ContinueText, LoginOptions, RegisterMessage } from './style'
import { FcGoogle } from 'react-icons/fc'
import { RiGithubFill, RiFacebookCircleFill } from 'react-icons/ri'
import { useFormik, FormikProvider } from 'formik'
import { loginFormValidationSchema } from '../../utils/validations'
import {
  loginWithFacebook,
  loginWithGithub,
  loginWithGoogle,
} from '../../utils/login'

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const handleLoginGoogle = async () => {
    try {
      const user = await loginWithGoogle()
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginGithub = async () => {
    try {
      const user = await loginWithGithub()
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginFacebook = async () => {
    try {
      const user = await loginWithFacebook()
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SignInUpContainer title="Login">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            name="email"
            placeholder="username@gmail.com"
            type="email"
          />
          <PasswordField
            label="Password"
            name="password"
            placeholder="Password"
          />
          <Link to="#" fontSize="sm" fontWeight="normal">
            Forgot Password?
          </Link>
          <Button size="md" fullWidth type="submit">
            Sign in
          </Button>
        </form>
      </FormikProvider>
      <ContinueText>or continue with</ContinueText>
      <LoginOptions>
        <ButtonWithIcon onClick={handleLoginGoogle}>
          <FcGoogle />
        </ButtonWithIcon>
        <ButtonWithIcon onClick={handleLoginGithub}>
          <RiGithubFill />
        </ButtonWithIcon>
        <ButtonWithIcon onClick={handleLoginFacebook}>
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

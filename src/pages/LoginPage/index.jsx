import React, { useState } from 'react'
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
import { loginWithEmail, loginWithProvider } from '../../utils/login'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      await loginWithEmail({
        email: values.email,
        password: values.password,
      })
      navigate('/home')
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: handleSubmit,
  })

  const handleLoginWithProvider = async (provider) => {
    try {
      await loginWithProvider(provider)
      navigate('/home')
    } catch (error) {
      console.log(error.message)
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
            {loading.email ? <Spinner /> : 'Sign in'}
          </Button>
        </form>
      </FormikProvider>
      <ContinueText>or continue with</ContinueText>
      <LoginOptions>
        <ButtonWithIcon onClick={() => handleLoginWithProvider('google')}>
          {loading.google ? <Spinner /> : <FcGoogle />}
        </ButtonWithIcon>
        <ButtonWithIcon onClick={() => handleLoginWithProvider('github')}>
          {loading.github ? <Spinner /> : <RiGithubFill />}
        </ButtonWithIcon>
        <ButtonWithIcon onClick={() => handleLoginWithProvider('facebook')}>
          {loading.facebook ? (
            <Spinner />
          ) : (
            <RiFacebookCircleFill color="#059BE5" />
          )}
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

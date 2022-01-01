import { FormikProvider, useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { PasswordField, TextField } from '../../components/Form'
import Link from '../../components/Link'
import SignInUpContainer from '../../components/SingInUpContainer'
import Spinner from '../../components/Spinner'
import { registerWithEmail } from '../../utils/login'
import { registerFormValidationSchema } from '../../utils/validations'
import { LoginMessage } from './style'

const RegisterPage = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      await registerWithEmail({
        email: values.email,
        password: values.password,
        username: values.username,
      })
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerFormValidationSchema,
    onSubmit: handleSubmit,
  })

  return (
    <SignInUpContainer title="Register">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Username"
            placeholder="username"
            type="text"
            name="username"
            tabIndex="1"
          />
          <TextField
            label="Email"
            placeholder="username@gmail.com"
            type="email"
            name="email"
            tabIndex="2"
          />
          <PasswordField
            label="Password"
            placeholder="Password"
            name="password"
            tabIndex="3"
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            tabIndex="4"
          />
          <Button fullWidth size="md" type="submit" tabIndex="5">
            {loading ? <Spinner /> : 'Register'}
          </Button>
        </form>
      </FormikProvider>
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

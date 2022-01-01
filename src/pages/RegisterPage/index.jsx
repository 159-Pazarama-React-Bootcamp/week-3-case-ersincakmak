import React from 'react'
import { TextField, PasswordField } from '../../components/Form'
import Button from '../../components/Button'
import SignInUpContainer from '../../components/SingInUpContainer'
import { LoginMessage } from './style'
import Link from '../../components/Link'
import { useFormik, FormikProvider } from 'formik'
import { registerFormValidationSchema } from '../../utils/validations'

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerFormValidationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
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
          />
          <TextField
            label="Email"
            placeholder="username@gmail.com"
            type="email"
            name="email"
          />
          <PasswordField
            label="Password"
            placeholder="Password"
            name="password"
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <Button fullWidth size="md" type="submit">
            Register
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

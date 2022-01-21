import * as Yup from 'yup'

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(5).required().label('Password'),
})

export const registerFormValidationSchema = Yup.object().shape({
  username: Yup.string().min(3).required().label('Username'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(5).required().label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required()
    .label('Confirm Password'),
})

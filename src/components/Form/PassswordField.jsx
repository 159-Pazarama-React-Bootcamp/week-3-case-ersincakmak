import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import {
  ErrorMessage,
  EyeButton,
  Field,
  Input,
  InputContainer,
  Title,
} from './style'
import { useField } from 'formik'

const PasswordField = ({ label, ...props }) => {
  const [type, setType] = useState('password')

  const [field, meta] = useField(props)

  const toggleType = () => {
    setType((ex) => (ex === 'password' ? 'text' : 'password'))
  }

  return (
    <Field>
      <Title>{label}</Title>
      <InputContainer>
        <Input
          type={type}
          error={!!(meta.touched && meta.error)}
          {...field}
          {...props}
        />
        <EyeButton onClick={toggleType} type="button">
          {type === 'password' ? <BsEyeSlash /> : <BsEye />}
        </EyeButton>
        {meta.touched && meta.error && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )}
      </InputContainer>
    </Field>
  )
}

export default PasswordField

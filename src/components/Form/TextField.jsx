import React from 'react'
import { ErrorMessage, Field, Input, InputContainer, Title } from './style'
import { useField } from 'formik'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Field>
      <Title>{label}</Title>
      <InputContainer>
        <Input error={!!(meta.touched && meta.error)} {...field} {...props} />
        {meta.touched && meta.error && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )}
      </InputContainer>
    </Field>
  )
}

export default TextField

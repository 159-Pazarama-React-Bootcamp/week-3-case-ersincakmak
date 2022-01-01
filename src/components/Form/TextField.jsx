import React from 'react'
import { Field, Input, Title } from './style'

const TextField = ({ type = 'text', label, placeholder }) => {
  return (
    <Field>
      <Title>{label}</Title>
      <Input type={type} placeholder={placeholder && placeholder} />
    </Field>
  )
}

export default TextField

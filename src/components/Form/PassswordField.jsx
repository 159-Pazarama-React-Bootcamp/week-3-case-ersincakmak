import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { EyeButton, Field, Input, InputContainer, Title } from './style'

const PasswordField = ({ label, placeholder }) => {
  const [type, setType] = useState('password')

  const toggleType = () => {
    setType((ex) => (ex === 'password' ? 'text' : 'password'))
  }

  return (
    <Field>
      <Title>{label}</Title>
      <InputContainer>
        <Input type={type} placeholder={placeholder && placeholder} />
        <EyeButton onClick={toggleType}>
          {type === 'password' ? <BsEyeSlash /> : <BsEye />}
        </EyeButton>
      </InputContainer>
    </Field>
  )
}

export default PasswordField

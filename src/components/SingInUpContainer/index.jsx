import React from 'react'
import {
  Container,
  Page,
  TransparentImage,
  BrandImage,
  FormContainer,
  Logo,
  Title,
} from './style'
import TransparentMotorcycleAndMan from '../../assets/images/TransparentMotorcycleAndMan.svg'
import MotorcycleAndMan from '../../assets/images/MotorcycleAndMan.svg'

const SignInUpContainer = ({ title, children }) => {
  return (
    <Page>
      <TransparentImage
        src={TransparentMotorcycleAndMan}
        alt="TransparentMotorcycleAndMan"
      />
      <Container>
        <BrandImage src={MotorcycleAndMan} alt="MotorcycleAndMan" />
        <FormContainer>
          <Logo>Your logo</Logo>
          <Title>{title}</Title>
          {children}
        </FormContainer>
      </Container>
    </Page>
  )
}

export default SignInUpContainer

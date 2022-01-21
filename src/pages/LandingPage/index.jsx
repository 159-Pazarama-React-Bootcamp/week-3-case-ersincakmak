import React from 'react'
import {
  Layout,
  Container,
  Title,
  Emoji,
  Paragraph,
  ArrowDown,
  Button,
  ImageContainer,
} from './style'
import LandingPageImage from '../../assets/images/LandingPageImage.svg'

const LandingPage = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Hello <Emoji>👋</Emoji>
        </Title>
        <Paragraph>
          I hope everyone is safe and sound. I designed different type of
          lending pages,application. it can help others to develop more ideas
          from this. I keep it simple and minimal. It can also help you find
          different options in exploring and improving your skills.
        </Paragraph>
        <Paragraph>
          I am available for new projects. I hope you show me your support{' '}
          <Emoji>😄</Emoji>
        </Paragraph>
        <Paragraph last_child>
          I wish you luck, <br /> Drax<Emoji>❤️</Emoji>
        </Paragraph>
        <ArrowDown />
        <Button to={'/login'}> Buy me a Coffee </Button>
      </Container>
      <ImageContainer>
        <img src={LandingPageImage} alt="HumanWithThings" />
      </ImageContainer>
    </Layout>
  )
}

export default LandingPage

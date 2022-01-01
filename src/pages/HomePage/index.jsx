import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { auth } from '../../firebase'
import Button from '../../components/Button'
import { Container } from './style'
import { signOut } from 'firebase/auth'

const HomePage = () => {
  const [user, setUser] = useState(null)

  const navigation = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        navigation('/')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user) {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }

  return (
    <Container>
      <p>Welcome, {user.email}</p>
      <Button size="sm" onClick={() => signOut(auth)}>
        Sign Out
      </Button>
    </Container>
  )
}

export default HomePage

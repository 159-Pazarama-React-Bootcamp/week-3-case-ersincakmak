import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LandingPage, LoginPage, RegisterPage } from './pages'
import GlobalCss from './assets/css'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

const App = () => {
  useEffect(() => {
    signOut(auth)
  }, [])

  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

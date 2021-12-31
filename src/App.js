import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LandingPage, LoginPage, RegisterPage } from './pages'
import GlobalCss from './assets/css'

const App = () => {
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

import React from 'react'
import { CustomButton } from './style'

const Button = ({ size, fullWidth, children }) => {
  return (
    <CustomButton size={size} fullWidth={fullWidth}>
      {children}
    </CustomButton>
  )
}

export default Button

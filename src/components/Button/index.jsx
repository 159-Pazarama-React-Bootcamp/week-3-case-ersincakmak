import React from 'react'
import { CustomButton } from './style'

const Button = ({ size, fullWidth, type = 'button', children }) => {
  return (
    <CustomButton size={size} fullWidth={fullWidth} type={type}>
      {children}
    </CustomButton>
  )
}

export default Button

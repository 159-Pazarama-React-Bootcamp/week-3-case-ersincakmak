import React from 'react'
import { CustomButton } from './style'

const Button = ({ size, fullWidth, type = 'button', children, ...props }) => {
  return (
    <CustomButton size={size} fullWidth={fullWidth} type={type} {...props}>
      {children}
    </CustomButton>
  )
}

export default Button

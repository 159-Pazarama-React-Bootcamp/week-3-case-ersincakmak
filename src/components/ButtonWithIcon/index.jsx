import React from 'react'
import { IconButton } from './style'

const ButtonWithIcon = ({ onClick, children }) => {
  return <IconButton onClick={onClick && onClick}>{children}</IconButton>
}

export default ButtonWithIcon

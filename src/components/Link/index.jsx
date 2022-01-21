import React from 'react'
import { NavLink } from './style'

const Link = ({ fontSize = 'md', fontWeight = 'normal', to, children }) => {
  return (
    <NavLink to={to} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </NavLink>
  )
}

export default Link

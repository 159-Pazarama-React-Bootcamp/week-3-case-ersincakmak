import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'

export const NavLink = styled(RouterLink)`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => (props.fontSize === 'md' ? '.875rem' : '.75rem')};
  color: #465685;
  width: max-content;
`

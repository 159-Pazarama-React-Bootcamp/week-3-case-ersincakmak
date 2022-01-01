import styled from 'styled-components'
import { VscArrowDown } from 'react-icons/vsc'
import { device } from '../../constants/media'
import { NavLink } from 'react-router-dom'

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  padding: 2.8125rem 1.5625rem;
  @media ${device.tablet} {
    padding: 4.21875rem 2.34375rem;
  }
  @media ${device.desktopM} {
    padding: 5.625rem 3.125rem;
  }

  overflow-x: hidden;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 33.125rem);
  flex-shrink: 0;
  margin-block: auto;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2.1875rem;
`
export const Emoji = styled.span`
  font-weight: normal;
`

export const Paragraph = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: ${(props) => !props.last_child && '1.2em'};
`

export const ArrowDown = styled(VscArrowDown)`
  color: #b1b8ca;
  font-size: 1.5rem;
  margin-inline: auto;
  margin-top: 2.1875rem;
`

export const Button = styled(NavLink)`
  background-image: linear-gradient(0deg, #ea5050 0%, #ee745b 100%);
  padding: 1.5rem;
  border-radius: 6.25rem;
  margin-top: 2.6875rem;
  line-height: 1.6;
  font-family: Gilroy, sans-serif;
  font-size: 1.5625rem;
  font-weight: bold;
  color: white;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    filter: brightness(0.87);
  }
`
export const ImageContainer = styled.div`
  min-width: 0;
  width: 100%;
  display: none;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
  aspect-ratio: 1.6;

  @media ${device.desktopS} {
    display: flex;
  }

  img {
    width: 100%;
    object-fit: contain;
    transform: scale(115%) translateX(3.125rem);
    aspect-ratio: 16 / 10;
  }
`

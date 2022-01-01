import styled from 'styled-components'
import { device } from '../../constants/media'

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2.1875rem;
  background-image: linear-gradient(90deg, #00b4db 0%, #0083b0 100%);
  position: relative;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;

  @media ${device.tablet} {
    padding-inline: 6.25rem;
  }

  @media ${device.desktopS} {
    padding-inline: 9.375rem;
  }

  @media ${device.desktopM} {
    padding-inline: 11.875rem;
  }
`
export const TransparentImage = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-25%);
  z-index: 1;
`
export const Container = styled.div`
  position: relative;
  flex: 1;
  height: max-content;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.1);
  z-index: 2;
  padding: 2.1875rem 3.125rem;
  display: flex;
  justify-content: center;
  margin-block: auto;
  width: max-content;
  margin-block: auto;

  @media screen and (min-width: 106.25rem) {
    justify-content: flex-start;
  }

  @media ${device.tablet} {
    padding: 2.1875rem 3.125rem;
    height: max(100%, max-content);
  }

  @media ${device.desktopS} {
    padding: 2.5rem 5rem;
  }

  @media ${device.desktopM} {
    padding: 4.6875rem 8rem;
  }
`

export const BrandImage = styled.img`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  pointer-events: none;
  z-index: 3;

  @media screen and (min-width: 106.25rem) {
    display: block;
  }
`

export const FormContainer = styled.div`
  width: min(100%, 25rem);
  display: flex;
  flex-direction: column;
  margin-block: auto;
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.2;
  color: #465685;
  margin-bottom: 0.8125rem;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.375rem;
  line-height: 1.2;
  color: #414042;
  margin-bottom: 0.75rem;
`

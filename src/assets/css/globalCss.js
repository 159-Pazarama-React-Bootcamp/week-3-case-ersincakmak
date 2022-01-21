import { createGlobalStyle } from 'styled-components'
import { device } from '../../constants/media'

const GlobalCss = createGlobalStyle`
    html{
        font-family: Gilroy, sans-serif;
        font-size: 12px;
        @media ${device.mobileL}{
            font-size: 14px;
        }
        @media ${device.tablet} {
            font-size: 16px
        }
        @media ${device.desktopL} {
            font-size: 18px;
        }
    }
`
export default GlobalCss

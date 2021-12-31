import { createGlobalStyle } from 'styled-components'

// Black
import BlackBoldTTF from '../font/Gilroy/Gilroy-Black.ttf'
import BlackBoldEOT from '../font/Gilroy/Gilroy-Black.eot'
import BlackBoldWOFF from '../font/Gilroy/Gilroy-Black.woff'
import BlackBoldWOFF2 from '../font/Gilroy/Gilroy-Black.woff2'

// Extra Bold
import ExtraBoldTTF from '../font/Gilroy/Gilroy-ExtraBold.ttf'
import ExtraBoldEOT from '../font/Gilroy/Gilroy-ExtraBold.eot'
import ExtraBoldWOFF from '../font/Gilroy/Gilroy-ExtraBold.woff'
import ExtraBoldWOFF2 from '../font/Gilroy/Gilroy-ExtraBold.woff2'

// Bold
import BoldTTF from '../font/Gilroy/Gilroy-Bold.ttf'
import BoldEOT from '../font/Gilroy/Gilroy-Bold.eot'
import BoldWOFF from '../font/Gilroy/Gilroy-Bold.woff'
import BoldWOFF2 from '../font/Gilroy/Gilroy-Bold.woff2'

// Semi Bold
import SemiBoldTTF from '../font/Gilroy/Gilroy-SemiBold.ttf'
import SemiBoldEOT from '../font/Gilroy/Gilroy-SemiBold.eot'
import SemiBoldWOFF from '../font/Gilroy/Gilroy-SemiBold.woff'
import SemiBoldWOFF2 from '../font/Gilroy/Gilroy-SemiBold.woff2'

// Medium
import MediumTTF from '../font/Gilroy/Gilroy-Medium.ttf'
import MediumEOT from '../font/Gilroy/Gilroy-Medium.eot'
import MediumWOFF from '../font/Gilroy/Gilroy-Medium.woff'
import MediumWOFF2 from '../font/Gilroy/Gilroy-Medium.woff2'

// Regular
import RegularTTF from '../font/Gilroy/Gilroy-Regular.ttf'
import RegularEOT from '../font/Gilroy/Gilroy-Regular.eot'
import RegularWOFF from '../font/Gilroy/Gilroy-Regular.woff'
import RegularWOFF2 from '../font/Gilroy/Gilroy-Regular.woff2'

// Light
import LightTTF from '../font/Gilroy/Gilroy-Light.ttf'
import LightEOT from '../font/Gilroy/Gilroy-Light.eot'
import LightWOFF from '../font/Gilroy/Gilroy-Light.woff'
import LightWOFF2 from '../font/Gilroy/Gilroy-Light.woff2'

// UltraLight
import UltraLightTTF from '../font/Gilroy/Gilroy-UltraLight.ttf'
import UltraLightEOT from '../font/Gilroy/Gilroy-UltraLight.eot'
import UltraLightWOFF from '../font/Gilroy/Gilroy-UltraLight.woff'
import UltraLightWOFF2 from '../font/Gilroy/Gilroy-UltraLight.woff2'

// Thin
import ThinTTF from '../font/Gilroy/Gilroy-Thin.ttf'
import ThinEOT from '../font/Gilroy/Gilroy-Thin.eot'
import ThinWOFF from '../font/Gilroy/Gilroy-Thin.woff'
import ThinWOFF2 from '../font/Gilroy/Gilroy-Thin.woff2'

const FontCss = createGlobalStyle`

    @font-face {
        font-family: 'Gilroy';
        src: url(${BlackBoldEOT});
        src: local('☞Gilroy-Black'), local('Gilroy-Black'),
            url(${BlackBoldEOT}) format('embedded-opentype'),
            url(${BlackBoldWOFF2}) format('woff2'),
            url(${BlackBoldWOFF}) format('woff'),
            url(${BlackBoldTTF}) format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${ExtraBoldEOT});
        src: local('☞Gilroy-ExtraBold'), local('Gilroy-ExtraBold'),
            url(${ExtraBoldEOT}) format('embedded-opentype'),
            url(${ExtraBoldWOFF2}) format('woff2'),
            url(${ExtraBoldWOFF}) format('woff'),
            url(${ExtraBoldTTF}) format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${BoldEOT});
        src: local('☞Gilroy-Bold'), local('Gilroy-Bold'),
            url(${BoldEOT}) format('embedded-opentype'),
            url(${BoldWOFF2}) format('woff2'),
            url(${BoldWOFF}) format('woff'),
            url(${BoldTTF}) format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${SemiBoldEOT});
        src: local('☞Gilroy-SemiBold'), local('Gilroy-SemiBold'),
            url(${SemiBoldEOT}) format('embedded-opentype'),
            url(${SemiBoldWOFF2}) format('woff2'),
            url(${SemiBoldWOFF}) format('woff'),
            url(${SemiBoldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src:  url(${MediumEOT})
        src: local('☞Gilroy-Medium'), local('Gilroy-Medium'),
        url(${MediumEOT}) format('embedded-opentype'),
            url(${MediumWOFF2}) format('woff2'),
            url(${MediumWOFF}) format('woff'),
            url(${MediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${RegularEOT});
        src: local('☞Gilroy-Regular'), local('Gilroy-Regular'),
        url(${RegularEOT}) format('embedded-opentype'),
            url(${RegularWOFF2}) format('woff2'),
            url(${RegularWOFF}) format('woff'),
            url(${RegularTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${LightEOT});
        src: local('☞Gilroy-Light'), local('Gilroy-Light'),
        url(${LightEOT}) format('embedded-opentype'),
            url(${LightWOFF2}) format('woff2'),
            url(${LightWOFF}) format('woff'),
            url(${LightTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${UltraLightEOT});
        src: local('☞Gilroy-UltraLight'), local('Gilroy-UltraLight'),
        url(${UltraLightEOT}) format('embedded-opentype'),
            url(${UltraLightWOFF2}) format('woff2'),
            url(${UltraLightWOFF}) format('woff'),
            url(${UltraLightTTF}) format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${ThinEOT});
        src: local('☞Gilroy-Thin'), local('Gilroy-Thin'),
        url(${ThinEOT}) format('embedded-opentype'),
            url(${ThinWOFF2}) format('woff2'),
            url(${ThinWOFF}) format('woff'),
            url(${ThinTTF}) format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

`

export default FontCss

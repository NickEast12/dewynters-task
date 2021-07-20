import { css } from 'styled-components'
import TitleFontWoff from '../assets/fonts/cursive-title.woff'
import TitleFontWoffTwo from '../assets/fonts/cursive-title.woff2'
import ProximaNovaWoff from '../assets/fonts/proxima-nova.woff'
import ProximaNovaWoffTwo from '../assets/fonts/proxima-nova.woff2'

const typography = css`
  @font-face {
    font-family: cursive-title;
    src: url(${TitleFontWoffTwo}) format('woff2'),
      url(${TitleFontWoff}) format('woff');
  }
  @font-face {
    font-family: proxima-nova;
    src: url(${ProximaNovaWoffTwo}) format('woff2'),
      url(${ProximaNovaWoff}) format('woff');
  }
`

export default typography

import { createGlobalStyle } from 'styled-components'
import variables from './variables'
import typography from './typography'
import mixins from './mixins'
import animations from './animations'

const GlobalStyles = createGlobalStyle`
    ${variables}
    ${typography}
    ${mixins}
    ${animations}
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html {
      font-size: 18px;
      width: 100%;
    }
    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      line-height: 1.3;
      
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--title);
      color: var(--secondary);
    }
    p, li, div, span, i, strong, button  {
      font-family: var(--text);
    }
`
export default GlobalStyles

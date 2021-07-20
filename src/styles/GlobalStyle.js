import { createGlobalStyle } from 'styled-components'
import variables from './Variables'
import typography from './Typography'
import mixins from './Mixins'

const GlobalStyles = createGlobalStyle`
    ${variables}
    ${typography}
    ${mixins}
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--title);
      color: var(--secondary);
    }
    p, li, div, span, i, strong {
      font-family: var(--text);
    }
`
export default GlobalStyles

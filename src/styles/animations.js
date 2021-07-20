import { css } from 'styled-components'

const animations = css`
  @keyframes in {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes backgroundIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export default animations

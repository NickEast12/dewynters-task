import { css } from 'styled-components'

const variables = css`
  :root {
    //? Colours
    --main: rgb(0, 216, 226);
    --secondary: rgb(0, 62, 121);

    //? Fonts
    --title: cursive-title, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      Helvetica, Arial, sans-serif;
    --text: proxima-nova, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      Helvetica, Arial, sans-serif;

    //? Font size
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    //? Default values
    --auto: 0 auto;
    --max-width: 1200px;
  }
`
export default variables

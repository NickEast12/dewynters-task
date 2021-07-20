import { css } from 'styled-components'

const variables = css`
  :root {
    //? Colours
    --main: rgb(0, 250, 238);
    --border: rgb(0, 223, 255);
    --secondary: rgb(0, 62, 121);
    --secondaryAlpha: rgba(0, 62, 121, 0.9);
    --gradient: linear-gradient(117deg, var(--main) 20%, var(--secondary) 110%);

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
    --fz-heading: 31px;

    //? Default values
    --auto: 0 auto;
    --maxWidth: 1200px;

    //? Borders
    --border: solid 2px var(--main);
  }
`
export default variables

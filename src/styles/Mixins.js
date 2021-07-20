import { css } from 'styled-components'

const mixins = {
  mainBtn: css`
    margin-top: 1rem;
    width: 90%;
    background: rgb(0, 250, 238);
    background: linear-gradient(
      169deg,
      rgba(0, 250, 238, 1) 0%,
      rgba(55, 27, 162, 1) 70%
    );
    padding: 0.65rem 0;
    border: none;
    max-width: 185px;
  `,
  title: css`
    margin: 0.5rem auto;
    width: 100%;
  `,
}

export default mixins

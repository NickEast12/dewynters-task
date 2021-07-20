import * as React from 'react'
import styled from 'styled-components'
// ? Local imports
import Layout from '../components/layout'
import HomeLeft from '../components/sections/home-left'
import HomeRight from '../components/sections/home-right'

const HomeStyles = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    width: 100%;
    height: 0.25rem;
    background: var(--secondary);
    background: var(--gradient);
    top: 0;
    left: 0;

    content: '';
  }
  .h-s {
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    padding: 2.5rem 0 0.5rem 0;
    @media only screen and (min-width: 768px) {
      width: 70%;
    }
    @media only screen and (min-width: 1024px) {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
    @media only screen and (min-width: 1280px) {
      width: 80%;
    }
  }
`
const IndexPage = () => (
  <Layout>
    <HomeStyles>
      <div className="h-s">
        <HomeLeft />
        <HomeRight />
      </div>
    </HomeStyles>
  </Layout>
)

export default IndexPage

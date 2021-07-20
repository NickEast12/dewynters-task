import * as React from 'react'
import styled from 'styled-components'
// ? Local imports
import Layout from '../components/layout'
import HomeLeft from '../components/sections/home-left'
import HomeRight from '../components/sections/home-right'

const HomeStyles = styled.section`
  width: 100%;
  position: relative;
  &::before {
    position: absolute;
    width: 100%;
    height: 0.5rem;
    background: var(--secondary);
    background: var(--gradient);
    top: 0;
    left: 0;

    content: '';
  }
  .h-s {
    width: 90%;
    margin: var(--auto);
    padding: 2.5rem 0 0.5rem 0;
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

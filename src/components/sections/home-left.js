import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const HomeLeftStyles = styled.section`
  width: 100%;
  padding: 1rem 0;
  border-top: solid 2px var(--main);
  text-align: center;
  h3 {
    ${({ theme }) => theme.mixins.title};
  }
  img {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }
`
const HomeLeft = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "Frozen-desktop.jpg" }) {
        name
        publicURL
      }
    }
  `)
  const { name, publicURL } = data.fileName
  return (
    <HomeLeftStyles>
      <h3>Building the world of Frozen</h3>
      <img src={publicURL} alt={name} />

      {/* 
          Personally I would use Gatsby image to render images to benefit from lazy loading, minification, and multiple file formats
          <StaticImage
            src="../../assets/images/Frozen-desktop.jpg"
            placeholder="blurred"
        />
          
        */}
    </HomeLeftStyles>
  )
}

export default HomeLeft

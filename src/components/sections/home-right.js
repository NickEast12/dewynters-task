import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Popup from '../functional/popup'

const HomeRightStyles = styled.section`
  width: 100%;
  padding: 1rem 0 1.5rem 0;
  margin-top: 0.5rem;
  border-top: var(--border);
  border-bottom: var(--border);
  text-align: center;
  h3 {
    ${({ theme }) => theme.mixins.title};
  }
  .l-i {
    img {
      width: 90%;
      height: auto;
      margin-top: 1rem;
    }
  }
  .l-t {
    > button {
      ${({ theme }) => theme.mixins.mainBtn};
      span {
        color: #fff;
        text-transform: uppercase;
        font-weight: 900;
      }
    }
  }
`
const HomeRight = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "close-app-phone.png" }) {
        name
        publicURL
      }
    }
  `)
  const { name, publicURL } = data.fileName
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    if (!open) {
      document.body.style.overflow = 'auto'
    }
  }, [open])
  return (
    <HomeRightStyles open={open}>
      <h3>Close to Frozen App</h3>
      <section className="l-i">
        <img src={publicURL} alt={name} />
      </section>
      <section className="l-t">
        <p>
          Enhance your FROZEN journey with the Close to FROZEN app. See
          exclusive content and news as the show come to life in London and keep
          helpful information for your visit at your fingertips!
        </p>
        <button type="button" onClick={() => setOpen(true)}>
          <span>Find out more</span>
        </button>
        <Popup trigger={open} setTrigger={setOpen} />
      </section>
    </HomeRightStyles>
  )
}

export default HomeRight

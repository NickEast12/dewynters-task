import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// ? Local imports
import Popup from '../functional/popup'
import Snowflake from '../../assets/svgs/snowflake.svg'

const HomeRightStyles = styled.section`
  width: 100%;
  padding: 1rem 0 1.5rem 0;
  margin-top: 0.5rem;
  border-top: var(--border);
  border-bottom: var(--border);
  text-align: center;
  position: relative;
  h3 {
    ${({ theme }) => theme.mixins.title};
  }

  .f-t {
    opacity: 0.46;
    position: absolute;
    top: -5rem;
    right: -3rem;
    width: 100px;
    z-index: -2;
  }
  .f-b {
    opacity: 0.36;
    position: absolute;
    bottom: -1rem;
    left: -3rem;
    width: 100px;
    z-index: -2;
  }

  .wrapper {
    .l-i {
      img {
        width: 90%;
        height: auto;
        margin-top: 1rem;
      }
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

  @media only screen and (min-width: 414px) {
    .f-t,
    .f-b {
      width: 120px;
    }
  }
  @media only screen and (min-width: 670px) {
    .f-t,
    .f-b {
      width: 200px;
    }
    .f-t {
      right: -6rem;
    }
    .f-b {
      left: -6rem;
    }
  }
  @media only screen and (min-width: 800px) {
    .f-t {
      right: -11rem;
    }
    .f-b {
      left: -11rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    .f-t {
      top: 2rem;
      right: -6rem;
      opacity: 0.25;
    }
    .f-b {
      left: 1.25rem;
      width: 80px;
      bottom: 7rem;
    }
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .l-i {
        img {
          width: 100%;
        }
      }
      .l-t {
        display: flex;
        flex-direction: column;
        justify-content: center;
        > p {
          text-align: left;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .f-t {
      top: 2rem;
      right: -9rem;
      opacity: 0.25;
    }
    .f-b {
      left: 1.25rem;
      width: 80px;
      bottom: 6rem;
    }
  }
  @media only screen and (min-width: 1440px) {
    .f-b {
      left: 2rem;
      width: 110px;
      bottom: 7rem;
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
      <Snowflake className="f-t" />
      <div className="wrapper">
        <section className="l-i">
          <img src={publicURL} alt={name} />
        </section>
        <section className="l-t">
          <p>
            Enhance your FROZEN journey with the Close to FROZEN app. See
            exclusive content and news as the show come to life in London and
            keep helpful information for your visit at your fingertips!
          </p>
          <button type="button" onClick={() => setOpen(true)}>
            <span>Find out more</span>
          </button>
          <Popup trigger={open} setTrigger={setOpen} />
          <Snowflake className="f-b" />
        </section>
      </div>
    </HomeRightStyles>
  )
}

export default HomeRight

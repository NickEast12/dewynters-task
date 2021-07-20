import PropTypes from 'prop-types'
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyles from '../styles/GlobalStyle'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout

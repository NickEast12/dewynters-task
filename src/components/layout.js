import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
// ? Local imports
import GlobalStyles from '../styles/GlobalStyle'
import theme from '../styles/theme'

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout

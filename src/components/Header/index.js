import React from 'react'
import Link from 'gatsby-link'
import logo from './../../logo.png'

const Header = () => (
  <div
    style={{
      padding: '.5rem',
      position: 'fixed',
      zIndex: 2,
      left: 0,
      top: `2rem`,
    }}
  >
    <Link
      to="/"
      style={{
        textDecoration: 'none',
      }}
    >
      <img src={logo} width="60" style={{ margin: 0 }} />
    </Link>
  </div>
)

export default Header

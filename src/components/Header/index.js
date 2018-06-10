import React from 'react'
import Link from 'gatsby-link'
import logo from './../../logo.png'

const Header = () => (
  <div
    style={{
      // margin: '0 auto',
      // maxWidth: `60em`,
      padding: '.5rem',
      // textAlign: `center`,
      position: 'fixed',
      zIndex: 2,
      left: 0,
      top: `-.7rem`,
      // right:0
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

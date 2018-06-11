import React from 'react'
import Header from '../components/Header'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <Header />
    <h1>404__NOT--FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to="/">Let's start over </Link>
  </div>
)

export default NotFoundPage

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import styles from './../pages/master.module.css'

const TemplateWrapper = ({ children }) => (
  <div className={styles.outer}>
    <Helmet title="🤓 Matt__Bagni--2018" />

    <Header />

    <div
      className={styles.inner}
      style={{
        margin: '0 auto',
        maxWidth: `80em`,
        padding: '1rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

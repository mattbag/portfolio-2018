import React from 'react'
// import Link from 'gatsby-link'
import logo from './../../logo.png'
import styles from '../../pages/master.module.css'
import Social from './../Social/index'

const About = props => (
  <div
    style={{
      margin: '4rem 0',
      display: 'grid',
      gridTemplateColumns: '1fr minmax(260px, 3fr) 1fr',
      gridTemplateAreas:"'. about .'",
      
      gridGap: 20,
    }}
  >
    <div style={{
        gridArea:'about'}}>
    <div
      className={`${styles.skew2} ${styles.shadow}`}
      style={{
        padding: '2rem',
        color: '#fff',
        backgroundColor: '#222',
        position: 'relative',
      }}
    >
      <div
        className={styles.skew1}      >
        <div dangerouslySetInnerHTML={{ __html: props.md[0].node.html }} />
        <img
          src={logo}
          width="60"
          style={{
            margin: 'auto',
            opacity: 0.05,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '50%',
            position: 'absolute',
          }}
        />
      </div>

    </div>
      <div style={{
          width:'90%',
          margin:'auto',
          transform: 'translate3d(0,-30%,-1px) skewY(2deg)',
      }}>
        <Social />
      </div>
    </div>

  </div>
)

export default About

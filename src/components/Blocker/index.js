import React, { Component } from 'react'
import logo from './../../logo.png'
import styles from '../../styles/master.module.css'

export default class Block extends Component {
  constructor() {
    super()
    this.state = {
      active: true,
    }
  }
  dismiss = () => this.setState({ active: false })

  render() {
    return (
      <div
        className={styles.blocker}
        style={{
          padding: '3rem',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 99,
          backgroundColor: 'rgba(0,0,0,.7)',
          left: 0,
          top: 0,
          color: 'white',
          textAlign: 'center',
          right: 0,
          display: this.state.active ? '' : 'none',
        }}
      >
        <img src={logo} width="60" style={{ margin: 0 }} />
        <h3>
          This site uses modern features, update your browser to avoid seeing
          wacky stuff!
        </h3>

        <h4 style={{ cursor: 'pointer' }} onClick={this.dismiss}>
          or dimiss anyway...
        </h4>
      </div>
    )
  }
}

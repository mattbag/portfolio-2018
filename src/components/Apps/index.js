import React, { Component } from 'react'
import styles from '../../styles/master.module.css'
import appStyles from '../../styles/apps.module.css'

export default class Apps extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   cells : this.cells
    // }
  }

  render() {
    return (
      <div
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

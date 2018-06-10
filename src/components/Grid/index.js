import React, { Component } from 'react'
import styles from './../../pages/master.module.css'

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.cells = 1
    this.grid = React.createRef()
  }
  // componentDidMount(){
  // console.log(this.grid.current.style)
  // this.grid.current.style.setProoerty('--cells',2)
  // }
  changeCells = () => {
    this.cells > 3 ? (this.cells = 1) : (this.cells += 1)
    this.grid.current.style.setProperty('--cells', this.cells)
  }

  render() {
    return (
      <div
        ref={this.grid}
        className={styles.grid}
        style={{
          '--cells': 1,
          gridTemplateColumns: `repeat(var(--cells), 1fr)`,
        }}
      >
        <p
          className={styles.grid__switch}
          onClick={this.changeCells}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '2rem',
            color: '#fff',
            marginBottom: 0,
            '--cursor': this.cells > 2 ? 'zoom-out' : 'zoom-in',
            cursor: 'var(--cursor)',
          }}
        >
          change
        </p>
        {this.props.children}
      </div>
    )
  }
}

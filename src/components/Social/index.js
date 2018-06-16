import React from 'react'
// import Link from 'gatsby-link'
import styles from '../../styles/master.module.css'

const links = [
  { name: 'github', link: 'https://mattbag.github.io/' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/matteobagni88/' },
  { name: 'twitter', link: 'https://mobile.twitter.com/mattbag00' },
  { name: 'codepen', link: 'https://codepen.io/mattbag/' },
]

const Social = () => (
  <div
    className={`${styles.shadow} ${styles.bg}`}
    style={{
      padding: '4rem 1rem 1rem',
    }}
  >
    <ul
      style={{
        backgroundColor: 'blue',
        margin: 0,
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {links.map(s => (
        <li
          key={s.name}
          style={{
            margin: 2,
            padding: 2,
          }}
        >
          <a
            href={s.link}
            style={{
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            {s.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Social

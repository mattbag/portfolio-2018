import React from 'react'
import Img from 'gatsby-image'
import Grid from './../components/Grid/index'
import Apps from './../components/Apps/index'
import Phone from './../components/Apps/Phone'
import About from './../components/About/index'
import Social from './../components/Social/index'

import styles from '../styles/master.module.css'
import appSstyles from '../styles/apps.module.css'

export default ({ data }) => (
  <div>
    <div className={styles.wrap}>
      <Apps>
        {data &&
          data.allAppsYaml.edges.map(({ node }, i) => (
            <div className={appSstyles.row} key={i}>
              <div
                style={{
                  gridColumnStart: i % 2 > 0 ? 2 : 3,
                  gridColumnEnd: i % 2 > 0 ? 3 : 4,
                  marginTop: '-10%',
                }}
              >
                <Phone url={node.url} />
              </div>
              <div
                style={{
                  color: 'white',
                  gridColumnStart: i % 2 > 0 ? 3 : 2,
                  gridColumnEnd: i % 2 > 0 ? 4 : 3,
                  textAlign: i % 2 > 0 ? 'left' : 'right',
                }}
              >
                <h2>{node.name}</h2>
                <p>{node.copy}</p>
                <a href={node.url} target="_blank" style={{ color: 'white' }}>
                  open
                </a>
              </div>
            </div>
          ))}
      </Apps>
      <Grid>
        {data &&
          data.allSitesYaml.edges.map(({ node }, index) => (
            <div className={styles.site} key={index}>
              <a href={node.url} target="_blank">
                <div className={styles.pic}>
                  <Img
                    sizes={
                      node.childScreenshot.screenshotFile.childImageSharp.sizes
                    }
                    alt={node.name}
                    className={styles.shadow}
                  />
                </div>
                <div className={styles.label}>
                  <div className={styles.label__in}>{node.name}</div>
                </div>
              </a>
            </div>
          ))}
      </Grid>
    </div>
    <About md={data.allMarkdownRemark.edges} />
    {/* <h2>People I like... my digital teachers</h2> */}
  </div>
)

export const query = graphql`
  query SitesQuery {
    allSitesYaml {
      edges {
        node {
          url
          name
          childScreenshot {
            screenshotFile {
              childImageSharp {
                sizes(maxWidth: 900) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: { id: { regex: "/about/" } }) {
      edges {
        node {
          id
          html
        }
      }
    }
    allAppsYaml {
      edges {
        node {
          url
          name
          copy
        }
      }
    }
  }
`

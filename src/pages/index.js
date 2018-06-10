import React from 'react'
import Img from 'gatsby-image'
import Grid from './../components/Grid/index'
import About from './../components/About/index'
import Social from './../components/Social/index'

import styles from './master.module.css'
// import logo from "../gatsby-light.svg"

export default ({ data }) => (
  <div className={styles.wrap}>
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

    <About md={data.allMarkdownRemark.edges} />
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
  }
`

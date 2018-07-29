import React from 'react'
import Img from 'gatsby-image'
import Grid from './../components/Grid/index'
import Phone from './../components/Apps/Phone'
import About from './../components/About/index'

import styles from '../styles/master.module.css'
import appSstyles from '../styles/apps.module.css'

export default ({ data }) => (
  <div>
    <div className={styles.wrap}>
      <Grid>
        {data.allSitesYaml &&
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
    <div className={appSstyles.rx}>
      {data.allAppsYaml &&
        data.allAppsYaml.edges.map(({ node }, i) => (
          <React.Fragment>
            <div className={`${appSstyles.app} ${styles.show__dk}`}>
              <Phone url={node.url} />
            </div>
            {i === 0 && (
              <div className={appSstyles.empty}>
                <h2>Apps</h2>
              </div>
            )}
            <div className={appSstyles.apptext}>
              <h2>{node.name}</h2>
              <p>{node.copy}</p>
              <a href={node.url} target="_blank" style={{ color: 'white' }}>
                open in browser
              </a>
            </div>
          </React.Fragment>
        ))}
    </div>
    <About md={data.allMarkdownRemark.edges} />

    <h2>To do:</h2>
    <ul>
      <li>People I like</li>
      <li>offline</li>
      <li>manifest</li>
      <li>v2</li>
      <li>typography</li>
      <li>site square fix</li>
      <li>codrops inspiration for tyles</li>
      <li>more pages? about read more/timeline/cv?</li>
    </ul>
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

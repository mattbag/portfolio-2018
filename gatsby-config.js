module.exports = {
  // pathPrefix: "/gatsby-folio-2018",
  siteMetadata: {
    title: 'Matt Bagni @ 2018 w/ Gatsby Lambda',
  },
  plugins: [
    `gatsby-plugin-react-next`,
    'gatsby-transformer-screenshot',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/logo.png',
        appName: 'Matt Bagni Portfolio',
        appDescription: 'Matt Bagni 2018 Portfolio',
        developerName: null,
        developerURL: 'mattbag.github.io',
        background: '#111',
        theme_color: '#111',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}

module.exports = {
  // pathPrefix: "/gatsby-folio-2018",
  siteMetadata: {
    title: 'Matt Bagni @ 2018 w/ Gatsby Lambda',
  },
  plugins: [
    `gatsby-plugin-react-next`,
    "gatsby-transformer-screenshot",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

module.exports = {
  siteMetadata: {
    title: `Modern Collectibles`,
    description: `Jing Daily | Modern Collectibles`,
    author: `@danielhirunrusme`,
    siteUrl: `https://moderncollectibles.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: "keyiwZ28dvk4kvbF4", // may instead specify via env, see below
        tables: [
          {
            baseId: "appgyq7KRpuJ54mAP",
            tableName: "Shop",
            defaultValues: {
              Title:"",
              Year:"",
              ID:"",
              Status:"",
              Attachments: []
            },
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

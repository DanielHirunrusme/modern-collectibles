module.exports = {
  siteMetadata: {
    title: `Modern Collectibles`,
    description: `Jing Daily | Modern Collectibles`,
    author: `@danielhirunrusme`,
    siteUrl: `https://moderncollectibles.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://jingdaily.us1.list-manage.com/subscribe/post?u=555a04b48e1f20aecf5db4d61&amp;id=8dec01cd8d', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
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
        name: `modern-collectibles`,
        short_name: `mc`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mc-square.jpeg`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

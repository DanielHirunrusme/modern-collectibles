module.exports = {
  siteMetadata: {
    title: `Modern Collectibles`,
    description: `Jing Daily | Modern Collectibles`,
    author: `@jingdaily`,
    siteUrl: `https://moderncollectibles.jingdaily.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CS71EMXNCQ", // Google Analytics / GA
          // "AW-CONVERSION_ID", 
          // "DC-FLOODIGHT_ID", 
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    // `gatsby-plugin-transition-link`,
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
          endpoint: 'https://jingdaily.us1.list-manage.com/subscribe/post?u=555a04b48e1f20aecf5db4d61&amp;id=09bde0e3f5', // string; add your MC list endpoint here; see instructions below
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
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

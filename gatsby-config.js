// in gatsby-config.js
module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `src/images/dice-icon.png`,
          pathPrefix: "/sigma0wl.github.io"
        },
      },
    ],
  }
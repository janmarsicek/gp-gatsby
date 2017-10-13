const lost = require(`lost`)
const autoprefixer = require(`autoprefixer`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [lost(), autoprefixer()],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-93349937-2`,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}

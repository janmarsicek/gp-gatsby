const autoprefixer = require(`autoprefixer`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: `/gh-pages-gatsby`,
}

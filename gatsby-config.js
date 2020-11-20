require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Je Vends Tout',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'b176349e71842cf0062bd106d5e2ea',
        autopop: true
      }
    },
  ],
}

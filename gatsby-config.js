/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ovningsuppgift`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "H4UD8VfPGjTgPaZEOCCA9zFaABoxWHdqRCJTl6rvBTs",
        spaceId: "91sbks2bgycp",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};

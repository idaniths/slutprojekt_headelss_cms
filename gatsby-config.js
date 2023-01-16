/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Idan Cheaproot's Portfolio - Frontend Developer`,
    description: `This is Idan Cheaproot's portfolio`,
    image: `https://i.imgur.com/XHQy9p9.jpg`,
    siteUrl: `https://stellular-kelpie-612966.netlify.app/`,
    keywords:
      "Idan Cheaproot, Portfolio, Frontend, Developer, Web, Developer, Stockholm, Sweden, JavaScript, React, Gatsby, TypeScript, GraphQL, Node, HTML, CSS, SASS, PostCSS, Contentful, Netlify, Git, GitHub, GitLab, Bitbucket, Visual Studio Code, VSCode, WebStorm, IntelliJ, PHP, MySQL, MongoDB, Docker, Linux, Ubuntu, Windows, macOS, Mac, Apple, iPhone, iPad, Android, Mobile, Responsive, Design, UI, UX, User Interface, User Experience, Accessibility,",
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

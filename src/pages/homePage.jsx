// import React from "react";
// import Header from "../components/Header/Header";
// import { graphql } from "gatsby";

// const HomePage = ({ data }) => {
//   const homePage = data.allContentfulHomePage.edges[0].node;
//   console.log(homePage);
//   return (
//     <main>
//       <Header home />
//       <img src={homePage.hero.file.url} alt="hero image" />
//       <h1>{homePage.welcomemessage}</h1>
//       <p>{homePage.paragraph}</p>
//     </main>
//   );
// };

// export default HomePage;

// export const Head = () => <title>Home page</title>;

// // page query
// export const pageQuery = graphql`
//   query homePageQuery {
//     allContentfulHomePage {
//       edges {
//         node {
//           welcomemessage
//           paragraph
//           hero {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const path = require("path");

// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//     query getAllSlugs {
//       allContentfulProduct {
//         edges {
//           nodes {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   data.allContentfulProduct.edges.forEach((edge) => {
//     actions.createPage({
//       // url
//       path: `/product/` + edge.nodes.slug,
//       // template
//       component: path.resolve("./src/templates/blogpost.jsx"),
//       //data
//       context: { slug: edge.nodes.slug },
//     });
//   });
// };

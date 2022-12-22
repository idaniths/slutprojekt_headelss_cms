// import * as React from "react";
// import { Link, graphql } from "gatsby";
// import Header from "../components/header/header";

// const singleBlogPost = ({ data }) => {
//   const post = data.contentfulProduct;

//   return (
//     <main>
//       <Header />
//       <h1>{post.title}</h1>
//       <p>{post.price}</p>

//       <h1>mall</h1>
//     </main>
//   );
// };

// export default singleBlogPost;

// export const Head = () => <title>mall</title>;

// export const query = graphql`
//   query SingleProductQuery($slug: String!) {
//     contentfulProduct(slug: { eq: $slug }) {
//       title
//       slug
//       price
//       image {
//         file {
//           url
//         }
//       }
//       description
//       contentful_id
//     }
//   }
// `;

import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";

const contactPage = ({ data }) => {
  const contact = data.contentfulPage;
  return (
    <article>
      <Header />
      <h1>{contact.title}</h1>
      <p>{contact.body}</p>
    </article>
  );
};

export default contactPage;

export const Head = () => <title>About</title>;

// graphql query
export const aboutPageQuery = graphql`
  query aboutQuery {
    contentfulPage(path: { eq: "/contact" }) {
      title
      path
      body
    }
  }
`;

import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header/Header";

const AboutPage = ({ data }) => {
  const about = data.contentfulPage;
  return (
    <article>
      <Header />
      <h1>{about.title}</h1>
      <p>{about.body}</p>
    </article>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;

// graphql query
export const aboutPageQuery = graphql`
  query aboutQuery {
    contentfulPage(path: { eq: "/about" }) {
      title
      path
      body
    }
  }
`;

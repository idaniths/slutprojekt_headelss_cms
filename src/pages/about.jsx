import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header/Header";
import "./about-and-contact.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const AboutPage = ({ data }) => {
  const about = data.contentfulPage;
  return (
    <>
      <Header />
      <main className="about-and-contact-main">
        <h1>{about.title}</h1>
        <article className="about-and-contact-article">
          <div>{renderRichText(about.bodyText)}</div>
        </article>
      </main>
    </>
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
      bodyText {
        raw
      }
    }
  }
`;

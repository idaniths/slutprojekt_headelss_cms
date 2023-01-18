import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header/Header";
import "./about-and-contact.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { SEO } from "../components/seo";

const ContactPage = ({ data }) => {
  const about = data.contentfulPage;
  return (
    <>
      <Header />
      <main className="about-and-contact-main">
        <h1>{about.title}</h1>
        <article className="contact-article">
          <div>{renderRichText(about.bodyText)}</div>
          <div className="contact-links">
            <Link className="links" to={about.link}>
              LinkedIn
            </Link>
            <Link className="links" to={about.link2}>
              Github
            </Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default ContactPage;

export const Head = () => <SEO title="contact" />;

// graphql query
export const aboutPageQuery = graphql`
  query contactQuery {
    contentfulPage(path: { eq: "/contact" }) {
      title
      path
      bodyText {
        raw
      }
      link
      link2
    }
  }
`;

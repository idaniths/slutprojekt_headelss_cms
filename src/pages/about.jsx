import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header/Header";
import "./about-and-contact.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const AboutPage = ({ data }) => {
  const about = data.contentfulPage;
  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  //   },
  // };
  return (
    <>
      <Header />
      <main className="about-and-contact-main">
        <h1>{about.title}</h1>
        <article className="about-and-contact-article">
          <img
            className="profile-pic"
            src={about.headerImage.file.url}
            alt=""
          />
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
      headerImage {
        file {
          url
        }
      }
    }
  }
`;

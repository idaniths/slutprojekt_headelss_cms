import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import "./about-and-contact.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const AboutPage = ({ data }) => {
  const about = data.contentfulPage;
  const education = data.allContentfulEducation.nodes;
  const experience = data.allContentfulExperience.nodes;

  return (
    <>
      <Header />
      <main className="about-and-contact-main">
        <h1>{about.title}</h1>
        <section className="about-and-contact-section">
          <article className="about-and-contact-article">
            <h2>About me</h2>
            <div>{renderRichText(about.bodyText)}</div>
          </article>
          <img
            className="profile-pic"
            src={about.headerImage.file.url}
            alt=""
          />

          <article className="education">
            <h2>Education</h2>
            {education.map((education) => {
              return (
                <div>
                  <h3>{education.title}</h3>
                  <h4>{education.subtitle}</h4>
                  <p>
                    {education.beginning} - {education.end}
                  </p>
                </div>
              );
            })}
          </article>
          <article className="education">
            <h2>Expereince</h2>
            {experience.map((experience) => {
              return (
                <div>
                  <h3>{experience.title}</h3>
                  <h4>{experience.subtitle}</h4>
                  <p>
                    {experience.beginning} - {experience.end}
                  </p>
                </div>
              );
            })}
          </article>
        </section>
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
    allContentfulEducation {
      nodes {
        title
        subtitle
        beginning
        end
      }
    }
    allContentfulExperience {
      nodes {
        title
        subtitle
        beginning
        end
      }
    }
  }
`;

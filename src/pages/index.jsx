import React from "react";
import Header from "../components/Header/Header";
import { graphql } from "gatsby";
import "./index.css";
import "../styles/global.css";

const HomePage = ({ data }) => {
  const homePage = data.allContentfulHomePage.edges[0].node;
  console.log(homePage);
  return (
    <main>
      <Header home />
      <img
        className="hero-image"
        src={homePage.hero.file.url}
        alt="hero image"
      />
      <div className="hero-text">
        <h1>{homePage.welcomemessage}</h1>
        <p>{homePage.paragraph}</p>
      </div>
    </main>
  );
};

export default HomePage;

export const Head = () => <title>Home page</title>;

// page query
export const pageQuery = graphql`
  query homePageQuery {
    allContentfulHomePage {
      edges {
        node {
          welcomemessage
          paragraph
          hero {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

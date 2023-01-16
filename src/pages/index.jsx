import React from "react";
import Header from "../components/Header/Header";
import { graphql } from "gatsby";
import "./index.css";
import "../styles/global.css";
import Footer from "../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";

const HomePage = ({ data }) => {
  const homePage = data.allContentfulHomePage.edges[0].node;
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isMobile ? (
        <main>
          <Header home />
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${homePage.hero.file.url})`,
              backgroundSize: "cover",
              backgroundPositionX: "60%",
              height: "100vh",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-text">
              <h1>{homePage.welcomemessage}</h1>
              <p>{homePage.paragraph}</p>
            </div>
            <Footer className="footer" />
          </div>
        </main>
      ) : (
        <main>
          <Header home />
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${homePage.hero.file.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-text">
              <h1>{homePage.welcomemessage}</h1>
              <p>{homePage.paragraph}</p>
            </div>
          </div>
          <Footer className="footer" />
        </main>
      )}
    </>
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

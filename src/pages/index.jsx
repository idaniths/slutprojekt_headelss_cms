import React from "react";
import Header from "../components/Header/Header";
import { graphql } from "gatsby";
import "./index.css";
import "../styles/global.css";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

const HomePage = ({ data }) => {
  const homePage = data.allContentfulHomePage.edges[0].node;

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;

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

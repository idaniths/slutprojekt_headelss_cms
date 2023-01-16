import * as React from "react";
import { Link, graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import "./Header.css";
import "../../styles/global.css";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ home }) => {
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // this function will toggle the menu when the hamburger is clicked

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };

  // this function will close the menu when a link is clicked

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    console.log("window.innerWidth", window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;

  const data = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { order: ASC }) {
        edges {
          node {
            title
            path
            contentful_id
            headerImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {isMobile ? (
        <div>
          <div className="hamburger-menu" onClick={handleClick}>
            <div className="hamburger-menu__line"></div>
            <div className="hamburger-menu__line"></div>
            <div className="hamburger-menu__line"></div>
          </div>

          <nav
            className="list-menu"
            style={{
              display: isActive ? "block" : "none",
            }}
          >
            <p className="close-menu" onClick={handleClick}>
              X
            </p>
            {data.allContentfulPage.edges.map((edge) => {
              return (
                <Link to={edge.node.path} key={edge.node.contentful_id}>
                  {edge.node.title}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : (
        <nav
          className="list-menu"
          style={{
            display: "block",
          }}
        >
          {data.allContentfulPage.edges.map((edge) => {
            return (
              <Link to={edge.node.path} key={edge.node.contentful_id}>
                {edge.node.title}
              </Link>
            );
          })}
        </nav>
      )}
      {!home && (
        <header className="page-header">
          <nav
            className="list-menu"
            style={{
              display: isActive ? "block" : "none",
            }}
          >
            <p
              className="close-menu"
              onClick={handleClick}
              style={{
                display: isActive ? "block" : "none",
              }}
            >
              X
            </p>
            {data.allContentfulPage.edges.map((edge) => {
              return (
                <Link to={edge.node.path} key={edge.node.contentful_id}>
                  {edge.node.title}
                </Link>
              );
            })}
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;

export const Head = () => <title>Header</title>;

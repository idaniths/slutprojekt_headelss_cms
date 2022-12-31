import * as React from "react";
import { Link, graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import "./Header.css";
import "../../styles/global.css";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ home }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("list-menu")) {
      setIsActive(false);
    }
  };

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
            // onClick={handleClickOutside}
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
          //   onClick={handleClickOutside}
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
            // onClick={handleClickOutside}
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

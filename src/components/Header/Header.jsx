import * as React from "react";
import { Link, graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import "./Header.css";
import "../../styles/global.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = ({ home }) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  // this is the function will be called when the user clicks on the hamburger menu
  const handleClick = () => {
    setIsActive(!isActive);
  };

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

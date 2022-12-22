import * as React from "react";
import { Link, graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import "./Header.css";
import "../../styles/global.css";

const Header = ({ home }) => {
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
      {home && (
        <header className="home-header">
          <nav className="list-menu">
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

      {!home && (
        <header className="page-header">
          <nav className="list-menu">
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

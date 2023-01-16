import * as React from "react";
import { graphql, Link } from "gatsby";
import Header from "../../components/Header/Header";
import SingleProject from "../../components/SingleProject/SingleProject";
import { useState, useEffect } from "react";

const ProjectPage = ({ data }) => {
  const project = data.contentfulProject;
  const [width, setWidth] = useState(window.innerWidth);

  // this function will toggle the menu when the hamburger is clicked

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
        <div
          style={{
            padding: "0.8rem 1rem 0.8rem 1rem",
          }}
        >
          <Link
            to="/projects"
            style={{
              textDecoration: "none",
              fontSize: "1.8rem",
              color: "black",
            }}
          >
            X
          </Link>
          <main>
            <SingleProject project={project} />
          </main>
        </div>
      ) : (
        <div>
          <Header />
          <main>
            <SingleProject project={project} />
          </main>
        </div>
      )}
    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query SingleProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      bodyText {
        raw
      }
      screenshot {
        file {
          url
        }
      }
      description
      siteUrl
      contentful_id
    }
  }
`;

export const Head = () => <title>Project</title>;

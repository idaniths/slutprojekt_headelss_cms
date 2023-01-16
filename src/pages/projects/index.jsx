import * as React from "react";
import { graphql } from "gatsby";
import Header from "../../components/Header/Header";
import ProjectList from "../../components/ProjectList/ProjectList";

const Projects = ({ data }) => {
  const projects = data.allContentfulProject.edges;

  return (
    <>
      <main>
        <Header />
        <ProjectList projects={projects} />
      </main>
    </>
  );
};

export default Projects;

export const Head = () => <title>Projects</title>;

// graphql query
export const projectPageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          category
          title
          createdAt
          slug
          description
          screenshot {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

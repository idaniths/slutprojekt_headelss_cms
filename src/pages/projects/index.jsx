import * as React from "react";
import { graphql } from "gatsby";
import Header from "../../components/Header/Header";
import ProjectList from "../../components/ProjectList/ProjectList";
import { SEO } from "../../components/seo";

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

export const Head = () => <SEO title="projects" />;

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

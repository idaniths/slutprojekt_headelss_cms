import * as React from "react";
import { graphql } from "gatsby";
import Header from "../../components/Header/Header";
import SingleProject from "../../components/SingleProject/SingleProject";

const ProjectPage = ({ data }) => {
  const project = data.contentfulProject;
  return (
    <>
      <Header />
      <SingleProject project={project} />
    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query SingleProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      screenshot {
        file {
          url
        }
      }
      description
      contentful_id
    }
  }
`;

export const Head = () => <title>Project</title>;

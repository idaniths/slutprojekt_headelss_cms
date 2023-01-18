import * as React from "react";
import { graphql, Link } from "gatsby";
import Header from "../../components/Header/Header";
import SingleProject from "../../components/SingleProject/SingleProject";
import { useMediaQuery } from "react-responsive";
import { SEO } from "../../components/seo";

const ProjectPage = ({ data }) => {
  const project = data.contentfulProject;
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

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
      githubUrl
      contentful_id
    }
  }
`;

export const Head = () => <SEO title="single project" />;

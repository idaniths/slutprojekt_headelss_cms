import * as React from "react";
import { Link, graphql } from "gatsby";
import "./ProjectList.css";
import "../../styles/global.css";

const ProjectList = ({ projects }) => {
  projects.sort((a, b) => {
    return new Date(a.node.createdAt) - new Date(b.node.createdAt);
  });

  return (
    <>
      <h1>Projects</h1>
      <p>Category</p>
      <section className="project-list">
        {projects.map((project) => {
          return (
            <article
              className="project-list-item"
              key={project.node.contentful_id}
            >
              <img
                src={project.node.screenshot[0].file.url}
                alt={project.node.title}
              />
              <Link to={`/projects/${project.node.slug}`}>
                <h2>{project.node.title}</h2>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default ProjectList;

export const Head = () => <title>Projects</title>;

import React from "react";
import "./SingleProject.css";
import "../../styles/global.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const SingleProject = ({ project }) => {
  return (
    <>
      <main className="singleproject-main">
        {/* <h1>{project.title}</h1> */}
        <section className="singleproject-section">
          <article className="singleproject-article">
            <h2>{project.title}</h2>
            <div>{renderRichText(project.bodyText)}</div>
            <a href={project.siteUrl}>Link to page</a>
            <a href={project.githubUrl}>Github</a>
            {project.screenshot.map((screenshot) => {
              return (
                <img
                  className="singleproject-img"
                  src={screenshot.file.url}
                  alt={project.title}
                />
              );
            })}
          </article>
        </section>
      </main>
    </>
  );
};

export default SingleProject;

import React from "react";
import "./SingleProject.css";
import "../../styles/global.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const SingleProject = ({ project }) => {
  return (
    <>
      <main className="singleproject-main">
        <section className="singleproject-section">
          <h1>{project.title}</h1>
          <article className="singleproject-article">
            {project.screenshot.map((screenshot) => {
              return (
                <img
                  className="singleproject-img"
                  src={screenshot.file.url}
                  alt={project.title}
                />
              );
            })}
            <h2>{project.title}</h2>
            {/* <p>{project.description}</p> */}
            <div>{renderRichText(project.bodyText)}</div>
            <a href={project.siteUrl}>Link to page</a>
          </article>
        </section>
      </main>
    </>
  );
};

export default SingleProject;

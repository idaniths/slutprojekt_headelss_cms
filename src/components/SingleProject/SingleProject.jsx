import React from "react";
import "./SingleProject.css";
import "../../styles/global.css";

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
            <p>{project.description}</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default SingleProject;

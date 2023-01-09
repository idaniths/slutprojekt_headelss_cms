import * as React from "react";
import { Link, graphql } from "gatsby";
import "./ProjectList.css";
import "../../styles/global.css";
import { useState, useEffect } from "react";

const ProjectList = ({ projects }) => {
  const [projectList, setProjectList] = useState(projects);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  // this function will get all the categories from the projects

  const getCategories = () => {
    const categories = projects.map((project) => {
      return project.node.category.map((category) => {
        return category;
      });
    });
    // flat will remove the nested array
    setCategories(categories.flat());
  };

  useEffect(() => {
    getCategories();
  }, []);

  // this function will filter the projects based on the category selected

  useEffect(() => {
    if (category !== "all") {
      const filteredProjects = projects.filter((project) => {
        if (project.node.category.includes(category)) {
          return project;
        }
      });
      setProjectList(filteredProjects);
    }
  }, [category]);

  // this fuction will reset the project list to all projects when the category is set to all

  useEffect(() => {
    if (category === "all") {
      setProjectList(projects);
    }
  }, [category]);

  // this function will sort the projects by date

  projectList.sort((a, b) => {
    return new Date(a.node.createdAt) - new Date(b.node.createdAt);
  });

  return (
    <>
      <main className="project-list-main">
        <h1>Projects</h1>

        <select
          name="category"
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="all">All projects</option>
          {categories.map((cat) => {
            return <option value={cat}>{cat}</option>;
          })}
        </select>

        <section className="project-list">
          {projectList.map((project) => {
            return (
              <Link to={`/projects/${project.node.slug}`}>
                <article
                  className="project-list-item"
                  key={project.node.contentful_id}
                >
                  <img
                    src={project.node.screenshot[0].file.url}
                    alt={project.node.title}
                  />
                  <h2>{project.node.title}</h2>
                </article>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ProjectList;

export const Head = () => <title>Projects</title>;

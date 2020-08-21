import React, { useState } from "react";
import data_projects from "../data/project.data";
import ProjectCard from "../ProjectCard/ProjectCard.component";
import Grid from "@material-ui/core/Grid";
import "./Projects.styles.scss";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);
  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };
  return (
    <div className="projects">
      <div className="projects__category">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => handleFilterCategory("react.js")}>React</div>
        <div onClick={() => handleFilterCategory("firebase")}>Firebase</div>
        <div onClick={() => handleFilterCategory("wordpress")}>Wordpress</div>
        <div onClick={() => handleFilterCategory("html")}>Html/Css</div>
      </div>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item md={6} lg={4} key={project.name}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;

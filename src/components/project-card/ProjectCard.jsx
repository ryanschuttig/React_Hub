import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ name, href }) => {
  return (
    <div className="project-card">
      <a className="name" href={href} target="_blank">
        {name}
      </a>
    </div>
  );
};

export default ProjectCard;

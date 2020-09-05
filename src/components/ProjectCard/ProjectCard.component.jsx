import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProjectCard.styles.scss";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className="projectCard">
      <div className="projectCard__wrapper">
        <a href={deployed_url} target="_blank">
          <img src={image} alt={name} />
        </a>
        <div className="projectCard__title">
          {github_url ? (
            <a href={github_url}>
              <FontAwesomeIcon icon={faGithub} className="projectCard__icon" />
            </a>
          ) : null}
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

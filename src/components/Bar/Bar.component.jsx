import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Bar.styles.scss";

const Bar = ({ name, level, icon }) => {
  const bar_width = `${level}%`;
  return (
    <div className="bar">
      <div className="bar__wrapper" style={{ width: bar_width }}>
        <FontAwesomeIcon icon={icon} className="bar__icon" />
        <span className="bar__name">{name}</span>
      </div>
    </div>
  );
};

export default Bar;

import React from "react";
import Skills from "../Skills/Skills.component";
import "./AboutMe.styles.scss";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about__intro">
        <h3>HEY, I'm Joseph</h3>
        <p>
          Solution-driven Front End Developer with 3 years experience building
          and maintaining responsive website. Proficient in HTML, CSS,
          JavaScript; plus modern libraries and frameworks.
        </p>
        <p>
          Passionate about learning new tools and knowledge in front end
          development.
        </p>
        <p>
          I am currently a full-time Web Developer working at Kanata Research
          Park.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default AboutMe;

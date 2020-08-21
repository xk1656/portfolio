import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  faWordpress,
  faShopify,
  faAdobe,
  faBootstrap,
  faGithub,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import Bar from "../Bar/Bar.component";
import "./Skills.styles.scss";

const Skills = () => {
  const languages = [
    { icon: faHtml5, name: "Html", level: "80" },
    { icon: faCss3, name: "Css/Less/Sass", level: "80" },
    { icon: faJs, name: "Javascript/Jquery", level: "50" },
    { icon: faReact, name: "React", level: "60" },
    { icon: faVuejs, name: "Vue", level: "40" },
  ];

  const tools = [
    { icon: faWordpress, name: "Wordpress", level: "80" },
    { icon: faBootstrap, name: "Bootstrap", level: "60" },
    { icon: faGithub, name: "Github", level: "40" },
    { icon: faShopify, name: "Shopify", level: "40" },
    { icon: faAdobe, name: "Photoshop", level: "30" },
  ];

  return (
    <Card className="card">
      <CardContent>
        <div className="about__skills">
          <div className="about__skills_half">
            <h5>Languages and Framework</h5>
            {languages.map(({ name, icon, level }) => (
              <Bar key={name} icon={icon} name={name} level={level} />
            ))}
          </div>
          <div className="about__skills_half">
            <h5>Tools</h5>
            {tools.map(({ name, icon, level }) => (
              <Bar key={name} icon={icon} name={name} level={level} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;

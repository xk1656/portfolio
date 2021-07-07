import React from "react";
import { Avatar, Button } from "@material-ui/core";
import {
  LinkedIn,
  GitHub,
  Email,
  PhoneInTalk,
  LocationOn,
} from "@material-ui/icons";
import CustomizedDialogs from "../Dialog/Dialog";
import "./Sidebar.styles.scss";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto: joseph.xiaok@gmail.com");
  };
  return (
    <div className="sidebar">
      <Avatar
        className="sidebar__avatar"
        alt="Joseph Xiao"
        src="/assets/projects_images/joseph-xiao.jpg"
      />
      <div className="sidebar__name">
        Joseph <span>Xiao</span>
      </div>
      <div className="sidebar__title">Front End Developer</div>
      <div className="sidebar__resume">
        <CustomizedDialogs></CustomizedDialogs>
      </div>
      <div className="sidebar__social_icons">
        <a href="https://www.linkedin.com/in/joseph-xiao-20287a167/">
          <LinkedIn className="linkedin"></LinkedIn>
        </a>

        <a href="https://github.com/xk1656">
          <GitHub className="github"></GitHub>
        </a>
      </div>
      <div className="sidebar__contact">
        <div className="sidebar__item">
          <Email />
          joseph.xiaok@gmail.com
        </div>
        <div className="sidebar__item">
          <PhoneInTalk />
          +1 343-988-7400
        </div>
        <div className="sidebar__item">
          <LocationOn />
          Greater Vancouver Area, BC
        </div>
      </div>
      <div className="sidebar__email_me">
        <Button variant="contained" onClick={handleEmailMe}>
          Email me
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

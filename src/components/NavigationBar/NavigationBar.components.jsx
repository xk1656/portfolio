import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import "./NavigationBar.styles.scss";
import AboutMe from "../AboutMe/AboutMe.component";
import Projects from "../Projects/Projects.component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NavigationBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigationBar">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="About Me" {...a11yProps(0)} />

          <Tab label="Projects" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects />
      </TabPanel>
    </div>
  );
}

import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.component";
import NavigationBar from "./components/NavigationBar/NavigationBar.components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="app__sidebar">
            <Sidebar />
          </div>
          <div className="app__main-content">
            <div className="container__header">
              <NavigationBar />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

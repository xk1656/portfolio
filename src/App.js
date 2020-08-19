import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.component";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__main-content">main</div>
      </div>
    </div>
  );
}

export default App;

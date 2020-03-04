import React from "react";
import "../css/App.css";
import Landing from "./Landing";
import Features from "../features";

function App() {
  return (
    <div className="App">
      <Landing features={Features} />
    </div>
  );
}

export default App;

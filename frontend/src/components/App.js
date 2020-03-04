import React from "react";
import "../css/App.css";
import Landing from "./landing/Landing";
import Features from "../features";

function App() {
  return (
    <div className="App">
      <Landing features={Features} />
    </div>
  );
}

export default App;

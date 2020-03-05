import React from "react";
import FeatureList from "./FeatureList";
import Navbar from "./Navbar";

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1>Configz.me</h1>
          <h3>[Insert captivating slogan here]</h3>
        </header>
        <Navbar />
        <div className="content">
          <FeatureList />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;

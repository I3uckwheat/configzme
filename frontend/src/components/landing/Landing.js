import React from "react";
import FeatureList from "./FeatureList";
import Buttons from "./buttons/Buttons";

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1>Configz.me</h1>
          <h3>[Insert captivating slogan here]</h3>
        </header>
        <div className="landing">
        <Buttons />
        <div className="content">
          <FeatureList />
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;

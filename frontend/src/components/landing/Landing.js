import React from "react";
import FeatureList from "./FeatureList";
import Buttons from "./buttons/Buttons";
import "../../css/landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <header className="header">
          <h1>Configz.me</h1>
          <h3>[Insert captivating slogan here]</h3>
        </header>
        <div className="content">
          <Buttons />
          <div className="commands">
            <FeatureList />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

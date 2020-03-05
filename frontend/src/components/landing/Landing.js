import React from "react";
import Title from "./header/Title";
import Slogan from "./header/Slogan";
import FeatureList from "./FeatureList";
import Navbar from "./Navbar";

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
      <header className="header">
        <Title title="Configz.me" />
        <Slogan slogan="[Insert captivating slogan here]" />
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

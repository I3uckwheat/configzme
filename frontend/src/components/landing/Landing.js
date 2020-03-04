import React from "react";
import Title from "./header/Title";
import Slogan from "./header/Slogan";
import FeatureList from "./FeatureList";

class Landing extends React.Component {
  render() {
    return (
      <header className="header">
        <Title title="Configz.me" />
        <Slogan slogan="[Insert captivating slogan here]" />
        <FeatureList />
      </header>
    );
  }
}

export default Landing;

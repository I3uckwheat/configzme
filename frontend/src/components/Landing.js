import React from "react";
import Title from "./header/Title";
import Slogan from "./header/Slogan";

class Landing extends React.Component {
  render() {
    return (
      <header className="header">
        <Title title="Configz.me" />
        <Slogan slogan="[Insert captivating slogan here]" />
        {Object.keys(this.props.features).map(key => (
          <p>{key}</p>
        ))}
      </header>
    );
  }
}

export default Landing;

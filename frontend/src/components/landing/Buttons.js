import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

class Buttons extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <RegisterButton />
        <LoginButton />
      </div>
    );
  }
}

export default Buttons;

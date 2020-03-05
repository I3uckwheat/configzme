import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <RegisterButton />
        <LoginButton />
      </div>
    );
  }
}

export default Navbar;

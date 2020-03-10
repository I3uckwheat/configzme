import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import "../../../css/buttons.css"

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons-container">
        <RegisterButton />
        <LoginButton showLoginForm={this.props.showLoginForm} toggleForm={this.props.toggleForm}/>
      </div>
    );
  }
}

export default Buttons;

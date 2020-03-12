import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import "../../../css/buttons.css";
import NewFileButton from "./NewFile";

class Buttons extends React.Component {
  render() {
    const showbuttons = () => {
      if (!this.props.loggedIn) {
        return (
          <>
            <RegisterButton />
            <LoginButton
              showLoginForm={this.props.showLoginForm}
              toggleForm={this.props.toggleForm}
            />
          </>
        );
      } else {
        return <NewFileButton />;
      }
    };
    return <div className="buttons-container">{showbuttons()}</div>;
  }
}

export default Buttons;

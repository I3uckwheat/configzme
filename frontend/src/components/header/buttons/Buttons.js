import React from "react";
import "../../../css/buttons.css";
import NewFileButton from "./NewFile";

class Buttons extends React.Component {
  render() {
    const showbuttons = () => {
      if (!this.props.loggedIn) {
        return (
          <>
            <button>Register</button>
            <button
              onClick={() => {
                this.props.toggleForm(this.props.showLoginForm);
              }}
            >
              Log In
            </button>
          </>
        );
      } else {
        return (
          <>
            <NewFileButton addFile={this.props.addFile} />
            <button
              onClick={() => {
                this.props.logout();
              }}
            >
              Logout
            </button>
          </>
        );
      }
    };
    return <div className="buttons-container">{showbuttons()}</div>;
  }
}

export default Buttons;

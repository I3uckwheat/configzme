import React from "react";

class LoginButton extends React.Component {
  render() {
    return (
      <button onClick={ () => { this.props.toggleForm(this.props.showLoginForm) }}>Log In</button>
    );
  }
}

export default LoginButton;

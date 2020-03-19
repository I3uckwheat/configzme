import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Enter Username"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" placeholder="Enter Password"></input>
        <input
          type="submit"
          value="Submit"
          onClick={event => {
            event.preventDefault();
            this.props.attemptLogin("test1", "testing123");
          }}
        ></input>
      </form>
    );
  }
}

export default LoginForm;

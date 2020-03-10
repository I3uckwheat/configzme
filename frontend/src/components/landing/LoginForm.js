import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Enter Username"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" placeholder="Enter Password"></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default LoginForm;

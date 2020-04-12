import React from "react";

class LoginModal extends React.Component {
  formRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (event) => {
    console.log(this.formRef.current);
    console.log(event.target);
    
    if (this.formRef.current === event.target) {
      return this.props.toggleLoginForm(event, this.props.showLoginForm);
    }
  }

  render() {
    const form = (
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Enter Username"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" placeholder="Enter Password"></input>
        <div>
          <button 
            onClick={() => {
              this.props.toggleLoginForm(this.props.showLoginForm);
            }}
            className="close-modal">
              Cancel
            </button>
          <input
            type="submit"
            value="Submit"
            onClick={event => {
              event.preventDefault();
              this.props.attemptLogin("test1", "testing123");
            }}
          ></input>
        </div>
      </form>
    )
    return (
      form
    );
  }
}

export default LoginModal;

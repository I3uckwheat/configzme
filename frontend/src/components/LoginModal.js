import React from "react";
import Modal from "./Modal";
import Button from "./Button";

class LoginModal extends React.Component{
  state = {
    emptyUsername: false,
    emptyPassword: false,
    username: '',
    password: ''
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value});
    if (event.target.value === "") {
      this.setState({ emptyUsername: true });
    } else {
      this.setState({ emptyUsername: false });
    }
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
    if (event.target.value === "") {
      this.setState({ emptyPassword: true });
    } else {
      this.setState({ emptyPassword: false });
    }
  }

  collectCredentials = () => {
    if (this.state.username === "") {
      this.setState({ emptyUsername: true })
    }

    if (this.state.password === "") {
      this.setState({ emptyPassword: true })
    }

    if (!this.state.emptyUsername && !this.state.emptyPassword) {
      this.props.attemptLogin(this.state.username, this.state.password);
    }
    // this.props.attemptLogin("test1", "testing123");
  }

  render() {
    return (
      <Modal 
        toggleModal={this.props.toggleLoginModal}
        showModal={this.props.showLoginModal}
        isModal ={true}
        title="Login"
        emptyUsername={this.state.emptyUsername}
        noPassword={this.state.emptyPassword}
        badCredentials={this.props.badCredentials}
      >
        <form 
          className="login-form"
          onSubmit={event => {
            event.preventDefault();
            this.collectCredentials();
          }}
        >
            <div className="input-pair">
              <label htmlFor="username" className="input-label">Username:</label>
              <span>
                <span className="bracket">></span>
                <input type="text" name="username" placeholder="Enter Username" className="input-field" onChange={this.handleUsername}></input>
              </span>
            </div>
            <div className="input-pair">
              <label htmlFor="password" className="input-label">Password:</label>
              <span>
                <span className="bracket">></span>
                <input type="password" name="password" placeholder="Enter Password" className="input-field" onChange={this.handlePassword}></input>
              </span>
            </div>
            <div>
              <Button
                styles="base green"
                type="submit"
              >
                Submit
              </Button>
              <button
                className="close-modal base white"
                onClick={() => {
                  this.props.toggleLoginModal(this.props.showLoginModal);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
      </Modal>
    );
  }
}

export default LoginModal;

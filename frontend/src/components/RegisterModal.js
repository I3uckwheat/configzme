import React from "react";
import Modal from "./Modal";
import Button from "./Button";

class RegisterModal extends React.Component {
  state = {
    enteredUsername: '',
    initialPassword: '',
    confirmedPassword: '',
    emptyUsername: false,
    noPassword: false,
    pwNoMatch: false
  }

  handleUsername = (event) => {
    this.setState({enteredUsername: event.target.value});
    if (event.target.value !== "") {
      this.setState({ emptyUsername: false })
    }
  }

  handleInitialPassword = (event) => {
    this.setState({initialPassword: event.target.value});
    if (event.target.value !== "") {
      this.setState({ noPassword: false })
    }
  }

  handleConfirmedPassword = (event) => {
    this.setState({confirmedPassword: event.target.value});
  }

  checkInput = () => {
    if (this.state.enteredUsername === '') {
      this.setState({ emptyUsername: true })
    }

    if (this.state.initialPassword === '') {
      this.setState({ noPassword: true})
    } else if (this.state.initialPassword === this.state.confirmedPassword) {
      this.setState({ pwNoMatch: false })
    } else {
      this.setState({ pwNoMatch: true })
    }

    if (!this.state.emptyUsername && !this.state.pwNoMatch) {
      this.props.attemptRegistration(this.state.enteredUsername, this.state.confirmedPassword);
    }
  }
  
  render() {
    return (
      <Modal 
        toggleModal={this.props.toggleRegisterModal}
        showModal={this.props.showRegisterModal}
        isModal ={true}
        title="Register"
        emptyUsername={this.state.emptyUsername}
        noPassword={this.state.noPassword}
        pwNoMatch={this.state.pwNoMatch}
        usernameTaken={this.props.usernameTaken}
      >
        <p className="input-text">Enter your desired credentials below:</p>
        <form 
          className="login-form" 
          onSubmit={event => {
            event.preventDefault();
            this.checkInput();
          }}
        >
            <div className="input-pair">
              <label htmlFor="username" className="input-label">Choose Username:</label>
              <span>
                <span className="bracket">></span>
                <input autoComplete="off" type="text" name="username" placeholder="Username" className="input-field" onChange={this.handleUsername}></input>
              </span>
            </div>
            <div className="input-pair">
              <label htmlFor="password" className="input-label">Set Password:</label>
              <span>
                <span className="bracket">></span>
                <input type="password" name="password" placeholder="Password" className="input-field" onChange={this.handleInitialPassword}></input>
              </span>
            </div>
            <div className="input-pair">
              <label htmlFor="password-confirm" className="input-label">Confirm Password:</label>
              <span>
                <span className="bracket">></span>
                <input type="password" name="password-confirm" placeholder="Confirm Password" className="input-field" onChange={this.handleConfirmedPassword}></input>
              </span>
            </div>
            <div>
              <Button
                styles="base green"
                type="submit"
                value="Submit"
              >
                Submit
              </Button>
              <Button
                styles="close-modal base white"
                function={this.props.toggleRegisterModal}
                argument={this.props.showRegisterModal}
              >
                Cancel
              </Button>
            </div>
          </form>
      </Modal>
    );
  }
}

export default RegisterModal;

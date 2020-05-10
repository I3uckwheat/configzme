import React from "react";
import Modal from "./Modal";

class RegisterModal extends React.Component{
  state = {
    enteredUsername: '',
    initialPassword: '',
    confirmedPassword: ''
  }

  handleUsername = (event) => {
    this.setState({enteredUsername: event.target.value})
  }

  handleInitialPassword = (event) => {
    this.setState({initialPassword: event.target.value})
  }

  handleConfirmedPassword = (event) => {
    this.setState({confirmedPassword: event.target.value})
  }
  
  render() {
    return (
      <Modal 
        toggleModal={this.props.toggleRegisterModal}
        showModal={this.props.showRegisterModal}
        isModal ={true}
        title="Register"
      >
        <p className="input-text">Enter your desired credentials below:</p>
        <form className="login-form">
            <div className="input-pair">
              <label htmlFor="username" className="input-label">Choose Username:</label>
              <span>
                <span className="bracket">></span>
                <input type="text" name="username" placeholder="Username" className="input-field" onChange={this.handleUsername}></input>
              </span>
            </div>
            <div className="input-pair">
              <label htmlFor="password" className="input-label">Set Password:</label>
              <span>
                <span className="bracket">></span>
                <input type="text" name="password" placeholder="Password" className="input-field" onChange={this.handleInitialPassword}></input>
              </span>
            </div>
            <div className="input-pair">
              <label htmlFor="password-confirm" className="input-label">Confirm Password:</label>
              <span>
                <span className="bracket">></span>
                <input type="text" name="password-confirm" placeholder="Confirm Password" className="input-field" onChange={this.handleConfirmedPassword}></input>
              </span>
            </div>
            <div>
              <input
                className="base green"
                type="submit"
                value="Submit"
                onClick={event => {
                  event.preventDefault();
                  this.props.attemptRegistration();
                }}
              ></input>
              <button
                className="close-modal base white"
                onClick={() => {
                  this.props.toggleRegisterModal(this.props.showRegisterModal);
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

export default RegisterModal;

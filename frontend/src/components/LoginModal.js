import React from "react";
import Modal from "./Modal";

class LoginModal extends React.Component {
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
              this.props.toggleModal(this.props.showModal);
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
      <Modal 
        toggleModal={this.props.toggleLoginModal}
        showModal={this.props.showLoginModal}
      >
        {form}
      </Modal>
    );
  }
}

export default LoginModal;

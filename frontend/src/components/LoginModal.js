import React from "react";
import Modal from "./Modal";

function LoginModal(props) {
  return (
    <Modal toggleModal={props.toggleLoginModal} showModal={props.showLoginModal}>
      <form className="login-form">
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" placeholder="Enter Username"></input>
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" placeholder="Enter Password"></input>
      <div>
        <button 
          onClick={() => {
            props.toggleLoginModal(props.showLoginModal);
          }}
          className="close-modal">
            Cancel
          </button>
        <input
          type="submit"
          value="Submit"
          onClick={event => {
            event.preventDefault();
            props.attemptLogin("test1", "testing123");
          }}
        ></input>
      </div>
    </form>
    </Modal>
  );
}

export default LoginModal;

import React from "react";
import Modal from "./Modal";

function LoginModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleLoginModal}
      showModal={props.showLoginModal}
      isModal ={true}
    >
      <div className="modal-interior">
        <h1 className="modal-title">Login</h1>
        <form className="login-form">
          <div className="input-pair">
            <label htmlFor="username" className="input-label">Username:</label>
            <span>
              <span className="bracket">></span>
              <input type="text" name="username" placeholder="Enter Username" className="input-field"></input>
            </span>
          </div>
          <div className="input-pair">
            <label htmlFor="password" className="input-label">Password:</label>
            <span>
              <span className="bracket">></span>
              <input type="text" name="password" placeholder="Enter Password" className="input-field"></input>
            </span>
          </div>
          <div>
            <input
              className="base green"
              type="submit"
              value="Submit"
              onClick={event => {
                event.preventDefault();
                props.attemptLogin("test1", "testing123");
              }}
            ></input>
            <button
              className="close-modal base white"
              onClick={() => {
                props.toggleLoginModal(props.showLoginModal);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default LoginModal;

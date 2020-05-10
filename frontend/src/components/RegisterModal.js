import React from "react";
import Modal from "./Modal";

function RegisterModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleRegisterModal}
      showModal={props.showRegisterModal}
      isModal ={true}
      title="Register"
    >
      <p className="input-text">Enter your desired credentials below:</p>
      <form className="login-form">
          <div className="input-pair">
            <label htmlFor="username" className="input-label">Choose Username:</label>
            <span>
              <span className="bracket">></span>
              <input type="text" name="username" placeholder="Username" className="input-field"></input>
            </span>
          </div>
          <div className="input-pair">
            <label htmlFor="password" className="input-label">Set Password:</label>
            <span>
              <span className="bracket">></span>
              <input type="text" name="password" placeholder="Password" className="input-field"></input>
            </span>
          </div>
          <div className="input-pair">
            <label htmlFor="password-confirm" className="input-label">Confirm Password:</label>
            <span>
              <span className="bracket">></span>
              <input type="text" name="password-confirm" placeholder="Confirm Password" className="input-field"></input>
            </span>
          </div>
          <div>
            <input
              className="base green"
              type="submit"
              value="Submit"
              onClick={event => {
                event.preventDefault();
                props.attemptRegistration();
              }}
            ></input>
            <button
              className="close-modal base white"
              onClick={() => {
                props.toggleRegisterModal(props.showRegisterModal);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
    </Modal>
  );
}

export default RegisterModal;

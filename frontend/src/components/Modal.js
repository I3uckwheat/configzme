import React from "react";
import TitleBar from "./TitleBar";
import "../css/modal.css";

function Modal(props) {
  function errorMessage() {
    let errorText = null;
    if (props.NoFileEntered) {
      errorText = "Select a file";
    } else if (props.emptyUsername) {
      errorText = "Username Required"
    } else if (props.noPassword) {
      errorText = "Password Required"
    } else if (props.pwNoMatch) {
      errorText = "Passwords Must Match"
    }

    if (errorText) return <p className="select-file">{errorText}</p>;
  }

  return (
    <div 
      className="modal"
      onClick={(event) => {
        // Check if clicked div is the same as the div we're attaching the onClick
        if (event.target === event.currentTarget) props.toggleModal(props.showModal)
      }}
    >
      <div className="modal-content">
        <TitleBar 
          isModal={props.isModal}
          toggleModal={props.toggleModal} 
          showModal={props.showModal}
        />
        {errorMessage()}
        <div className="modal-interior">
          <h1 className="modal-title">{props.title}</h1>
          {props.children}
        </div>
      </div>        
    </div>
  );
}

export default Modal;

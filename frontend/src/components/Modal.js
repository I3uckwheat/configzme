import React from "react";
import TitleBar from "./TitleBar";
import "../css/modal.css";

function Modal(props) {
  return (
    <div 
      className="modal"
      onClick={(event) => {
        // Check if clicked div is the same as the div we're attaching the onClick
        if (event.target === event.currentTarget) {
          props.toggleModal(props.showModal)
        }
      }}
    >
      <div className="modal-content">
        <TitleBar isModal={props.isModal}/>
        {props.children}
      </div>        
    </div>
  );
}

export default Modal;

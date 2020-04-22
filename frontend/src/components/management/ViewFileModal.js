import React from "react";
import Modal from "../Modal";

function ViewFileModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleModal}
      showModal={props.showModal}
      isModal={true}
    >
      <div className="modal-interior">
        <h1 className="modal-title">File Contents</h1>
        <p className="modal-interior input-text">{props.fileContents}</p>
      </div>
    </Modal>
  );
}

export default ViewFileModal;

import React from "react";
import Modal from "../Modal";

function ViewFileModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleModal}
      showModal={props.showModal}
      isModal={true}
    >
      <p className="modal-interior input-text">{props.fileContents}</p>
    </Modal>
  );
}

export default ViewFileModal;

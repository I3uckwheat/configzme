import React from "react";
import Modal from "../Modal";

function ViewFileModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleModal}
      showModal={props.showModal}
    >
      <span onClick={props.toggleModal}>&times;</span>
      <p>{props.fileContents}</p>
    </Modal>
  );
}

export default ViewFileModal;

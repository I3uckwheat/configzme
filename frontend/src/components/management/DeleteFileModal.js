import React from "react";
import Modal from "../Modal";

function DeleteFileModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleModal}
      showModal={props.showModal}
    >
      <p>Are you sure you want to delete this file?</p>
      <button onClick={() => {
        props.toggleModal();
      }}>Cancel</button>
      <button
        onClick={() => {
          props.deleteFile(props.fileName);
        }}
      >
        Delete
      </button>
    </Modal>
  );
}

export default DeleteFileModal;

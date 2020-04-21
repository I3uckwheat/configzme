import React from "react";
import Modal from "../Modal";
import Button from "../Button";

function DeleteFileModal(props) {
  return (
    <Modal 
      toggleModal={props.toggleModal}
      showModal={props.showModal}
      isModal={true}
    >
      <div className="modal-interior">
        <p className="input-text">Are you sure?</p>
        <div className="buttons">
          <Button
            function={props.deleteFile}
            argument={props.fileName}
            styles="base green"
            buttontext="Delete"
          />
          <Button
            function={props.toggleModal}
            styles="base white"
            buttontext="Cancel"
          />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteFileModal;

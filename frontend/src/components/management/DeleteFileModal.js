import React from "react";
import Modal from "../Modal";
import Button from "../Button";

function DeleteFileModal(props) {
  async function deleteFile(filename) {
    await fetch(`/${filename}?api=true`, {
      method: "DELETE"
    });
    props.getFileNames();
  };
  
  return (
    <Modal 
      toggleModal={props.toggleModal}
      showModal={props.showModal}
      isModal={true}
      title="Delete File"
    >
      <p className="input-text">Are you sure?</p>
      <div className="buttons">
        <Button
          function={deleteFile}
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
    </Modal>
  );
}

export default DeleteFileModal;

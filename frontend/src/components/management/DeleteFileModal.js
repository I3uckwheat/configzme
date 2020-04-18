import React from "react";
import Modal from "../Modal";

class DeleteFileModal extends React.Component {
  render() {
    return (
      <Modal 
        toggleModal={this.props.toggleModal}
        showModal={this.props.showModal}
      >
        <p>Are you sure you want to delete this file?</p>
        <button onClick={() => {
          this.props.toggleModal();
        }}>Cancel</button>
        <button
          onClick={() => {
            this.props.deleteFile(this.props.fileName);
          }}
        >
          Delete
        </button>
      </Modal>
    );
  }
}

export default DeleteFileModal;

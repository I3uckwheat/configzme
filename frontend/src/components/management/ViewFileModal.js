import React from "react";
import Modal from "../Modal";

class ViewFileModal extends React.Component {
  render() {
    return (
      <Modal 
        toggleModal={this.props.toggleModal}
        showModal={this.props.showModal}
      >
        <span
          className="close"
          onClick={this.props.toggleModal}
        >&times;</span>
        <p>{this.props.fileContents}</p>
      </Modal>
    );
  }
}

export default ViewFileModal;

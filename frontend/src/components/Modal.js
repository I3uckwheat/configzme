import React from "react";

class Modal extends React.Component {
  ModalContent = () => {
    return (
      <div className="modal" ref={this.formRef}>
        <div className="modal-content">
          {this.props.children}
        </div>        
      </div>
    )
  }

  render() {
    return (this.ModalContent());
  }
}

export default Modal;

import React from "react";

class Modal extends React.Component {
  formRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (event) => {
    console.log(this.formRef.current);
    console.log(event.target);
    
    if (this.formRef.current === event.target) {
      return this.props.toggleLoginForm(event, this.props.showLoginForm);
    }
  }
  
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

import React from "react";

class FileInput extends React.Component {
  componentDidMount(){
    this.fileSelector = this.buildFileSelector();
  }

  componentWillUnmount() {
    this.fileSelector.removeEventListener('change', this.props.onChange)
  }
  
  buildFileSelector = () => {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', this.props.type);
    fileSelector.setAttribute('name', this.props.name);
    fileSelector.setAttribute('id', this.props.id);
    fileSelector.addEventListener('change', this.props.onChange);
    return fileSelector;
  }

  handleFileSelect = (e) => {
    this.fileSelector.click();
    e.preventDefault();
  }
  
  render(){
    return (
      <button 
        className="base blue" 
        onClick={this.handleFileSelect}
      >
        Select file
      </button>
    )
  }
}

export default FileInput;

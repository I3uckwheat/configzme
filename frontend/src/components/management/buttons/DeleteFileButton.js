import React from "react";

class DeleteFileButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.deleteFile(this.props.fileName);
        }}
      >
        Delete
      </button>
    );
  }
}

export default DeleteFileButton;

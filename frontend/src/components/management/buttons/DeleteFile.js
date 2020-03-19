import React from "react";

class DeleteFile extends React.Component {
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

export default DeleteFile;

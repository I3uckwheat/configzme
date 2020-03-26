import React from "react";

class ViewFileButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.showFileContents();
        }}
      >
        View
      </button>
    );
  }
}

export default ViewFileButton;

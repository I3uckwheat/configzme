import React from "react";

class NewFileButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.toggleAddFileForm(this.props.showAddFileForm);
        }}
      >
        + New File
      </button>
    );
  }
}

export default NewFileButton;

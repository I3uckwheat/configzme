import React from "react";

class EditFileForm extends React.Component {
  state = {
    newFileContents: this.props.fileContents
  };

  editedContents = event => {
    this.setState({
      newFileContents: event.target.value
    });
  };

  render() {
    return (
      <>
        <label htmlFor="file-content">File Content:</label>

        <textarea
          id="file-content"
          rows="4"
          cols="50"
          value={this.state.newFileContents}
          onChange={this.editedContents}
        ></textarea>
      </>
    );
  }
}

export default EditFileForm;

import React from "react";

class EditFileForm extends React.Component {
  state = {
    newFileContents: this.props.fileContents,
  };

  editedContents = (event) => {
    const contents = event.target.value;
    this.setState(
      {
        newFileContents: event.target.value,
      },

      () => {
        const editedFile = new File(
          [`${this.state.newFileContents}`],
          `${this.props.fileName}`,
          {
            type: "text/plain",
          }
        );
        this.props.editFile(editedFile, this.props.fileName, contents);
      }
    );
  };

  EditForm = () => {
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
    )
  }

  render() {
    return this.EditForm();
  }
}

export default EditFileForm;

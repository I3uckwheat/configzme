import React from "react";
import Modal from "../Modal";
import Button from "../Button";

class EditFileForm extends React.Component {
  state = {
    newFileContents: this.props.fileContents,
  };

  editedContents = (event) => {
    const contents = event.target.value;
    this.setState({newFileContents: contents},
      () => {
        const editedFile = new File(
          [`${this.state.newFileContents}`],
          `${this.props.fileName}`,
          {type: "text/plain",}
        );
        this.props.editFile(editedFile, this.props.fileName, contents);
      }
    );
  };

  render() {
    return (
      <Modal toggleModal={this.props.editFormToggle} isModal={true} title="Edit File">
        <label htmlFor="file-content" className="input-label">Edit:</label>
        <textarea
          id="file-content"
          className="input-field"
          rows="4"
          cols="40"
          value={this.state.newFileContents}
          onChange={this.editedContents}
        ></textarea>
        <Button
          function={this.props.editFormToggle}
          styles="base green"
          buttontext="Done Editing"
        />
      </Modal>
    )
  }
}

export default EditFileForm;

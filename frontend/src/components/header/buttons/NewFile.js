import React from "react";

class NewFileButton extends React.Component {
  addFileForm() {
    const form = (
      <form
        encType="multipart/form-data"
        method="POST"
        autoComplete="off"
        onSubmit={this.props.fileSubmitHandler}
      >
        <label htmlFor="file-name">Enter File Name:</label>
        <input
          type="text"
          htmlFor="file-name"
          name="file-name"
          onChange={this.props.setFileName}
          value={this.props.fileName}
        ></input>

        <label htmlFor="file">Add a File:</label>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={this.props.setFile}
        />
        <input type="submit" value="Submit"></input>
      </form>
    );

    if (this.props.showAddFile) {
      return form;
    } else {
      return null;
    }
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.props.showAddFileForm(this.props.showAddFile);
          }}
        >
          + New File
        </button>
        {this.addFileForm()}
      </>
    );
  }
}

export default NewFileButton;

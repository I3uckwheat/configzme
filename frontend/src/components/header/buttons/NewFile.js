import React from "react";

class NewFileButton extends React.Component {
  state = {
    showAddFile: false,
    fileName: "",
    file: null
  };

  showAddFileForm = state => {
    if (state) {
      this.setState({ showAddFile: false });
    } else {
      this.setState({ showAddFile: true });
    }
  };

  setFileName = event => {
    this.setState({ fileName: event.target.value });
  };

  setFile = event => {
    this.setState({ file: event.target.files[0] });
  };

  submitHandler = event => {
    event.preventDefault();

    if (this.state.file && this.state.fileName) {
      this.props.addFile(this.state.file, this.state.fileName);
      this.setState({
        showAddFile: false,
        fileName: "",
        file: null
      });
    }
  };

  addFileForm() {
    const form = (
      <form
        encType="multipart/form-data"
        method="POST"
        autoComplete="off"
        onSubmit={this.submitHandler}
      >
        <label htmlFor="file-name">Enter File Name:</label>
        <input
          type="text"
          htmlFor="file-name"
          name="file-name"
          onChange={this.setFileName}
          value={this.state.fileName}
        ></input>

        <label htmlFor="file">Add a File:</label>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={this.setFile}
        />
        <input type="submit" value="Submit"></input>
      </form>
    );

    if (this.state.showAddFile) {
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
            this.showAddFileForm(this.state.showAddFile);
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

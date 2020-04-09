import React from "react";
import "../../css/buttons.css";
import ViewFile from "./ViewFile";
import EditFileForm from "./EditFileForm";

class File extends React.Component {
  state = {
    viewFileContents: false,
    fileContents: '',
    downloadFile: false,
    showEditForm: false,
    file: null,
  };

  componentDidMount() {
    this.getFileContents();
  }

  getFileContents = async () => {

    try {
      const response = await fetch(`/${this.props.fileName}?api=true`);
      const data = await response.json();

      this.setState({
        fileContents: data.file,
        file: data,
      });
    } catch (e) {
      console.log(e);
      console.log("Error!");
    }
  };

  showFileContents = () => {
    if (this.state.viewFileContents) {
      this.setState({ viewFileContents: false });
    } else {
      this.setState({ viewFileContents: true });
    }
  };

  FileContents = () => {
    return this.state.viewFileContents ? (
      <ViewFile fileContents={this.state.fileContents} />
    ) : null;
  };

  editFormToggle = () => {
    this.state.showEditForm ? this.setState({ showEditForm: false }) : this.setState({ showEditForm: true });
  };

  editFile = async (file, fileName, contents) => {
    if (contents === '') {
      this.setState({fileContents: ''})
    } else {
      const url = `/${fileName}?api=true`;

      try {
        const formData = new FormData();
        const FileAdded = file;
  
        formData.append("file", FileAdded);
  
        const sendFile = await fetch(url, {
          method: "put",
          body: formData
        });
  
        const data = await sendFile;
        console.log(data);
        this.getFileContents();
      } catch (event) {
        console.log("Error!", event);
      }
    } 
  };

  RenderEditForm = () => {
    return this.state.showEditForm ? (
      <EditFileForm
        fileContents={this.state.fileContents}
        editFile={this.editFile}
        file={this.state.file}
        fileName={this.props.fileName}
        getFileContents={this.getFileContents}
      />
    ) : null;
  };

  render() {
    return (
      <div className="file">
        <p>{this.props.fileName}</p>
        <div className="file-buttons">
          <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            this.state.fileContents
          )}`}
          download={`${this.props.fileName}.txt`}
          className="psuedo-button"
          >
            Download
          </a>
          <button
            onClick={() => {
              this.showFileContents();
            }}
          >
            View
          </button>
          <button onClick={this.editFormToggle}>Edit</button>
          <button
            onClick={() => {
              this.props.deleteFile(this.props.fileName);
            }}
          >
            Delete
          </button>
        </div>
        {this.FileContents()}
        {this.RenderEditForm()}
      </div>
    );
  }
}

export default File;

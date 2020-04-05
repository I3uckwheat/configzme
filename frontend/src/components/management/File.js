import React from "react";
import DownloadFileButton from "./buttons/DownloadFileButton";
import ViewFile from "./ViewFile";
import EditFileForm from "./EditFileForm";

class File extends React.Component {
  state = {
    viewFileContents: false,
    fileContents: null,
    downloadFile: false,
    showEditForm: false,
    file: null,
  };

  componentDidMount() {
    this.getFileContents();
  }

  getFileContents = async () => {
    console.log("Getting file contents!");

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

  editForm = () => {
    if (!this.state.showEditForm) {
      this.setState({ showEditForm: true });
    } else {
      this.setState({ showEditForm: false });
    }
  };

  editFile = async (file, fileName, contents) => {
    if (contents === '') {
      this.setState({fileContents: null})
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

  ViewEditForm = () => {
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
          <DownloadFileButton
            contents={this.state.fileContents}
            filename={this.props.fileName}
          />
          <button
            onClick={() => {
              this.showFileContents();
            }}
          >
            View
          </button>
          <button onClick={this.editForm}>Edit</button>
          <button
            onClick={() => {
              this.props.deleteFile(this.props.fileName);
            }}
          >
            Delete
          </button>
        </div>
        <this.FileContents />
        <this.ViewEditForm />
      </div>
    );
  }
}

export default File;

import React from "react";
import DownloadFileButton from "./buttons/DownloadFileButton";
import ViewFile from "./ViewFile";
import EditFileForm from "./EditFileForm";

class File extends React.Component {
  state = {
    viewFileContents: false,
    fileContents: null,
    downloadFile: false,
    showEditForm: false
  };

  componentDidMount() {
    this.getFileContents();
  }

  getFileContents = async () => {
    try {
      const response = await fetch(`/${this.props.fileName}?api=true`);
      const data = await response.json();

      this.setState({
        fileContents: data.file
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

  ViewEditForm = () => {
    return this.state.showEditForm ? (
      <EditFileForm
        fileContents={this.state.fileContents}
        addFile={this.props.addFile}
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

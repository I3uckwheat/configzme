import React from "react";
import DownloadFileButton from "./buttons/DownloadFileButton";
import ViewFileButton from "./buttons/ViewFileButton";
import EditFileButton from "./buttons/EditFileButton";
import DeleteFileButton from "./buttons/DeleteFileButton";
import ViewFile from "./ViewFile";

class File extends React.Component {
  state = {
    viewFileContents: false,
    fileContents: null,
    downloadFile: false
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

  render() {
    return (
      <div className="file">
        <p>{this.props.fileName}</p>
        <div className="file-buttons">
          <DownloadFileButton
            contents={this.state.fileContents}
            filename={this.props.fileName}
          />
          <ViewFileButton showFileContents={this.showFileContents} />
          <EditFileButton />
          <DeleteFileButton
            deleteFile={this.props.deleteFile}
            fileName={this.props.fileName}
          />
        </div>
        <this.FileContents />
      </div>
    );
  }
}

export default File;

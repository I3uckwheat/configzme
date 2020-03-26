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

    // console.log("Show file contents");
    // console.log(this.state.fileContents);

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

  DownloadFileLink = (filename, contents) => {
    if (this.state.downloadFile) {
      return (
        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(contents)}`}
          download={`${filename}.txt`}
        >
          test
        </a>
      );
    } else {
      return null;
    }
  };

  downloadFile = () => {
    this.setState({ downloadFile: true });
    this.getFileContents();
  };

  render() {
    return (
      <div className="file">
        <p>{this.props.fileName}</p>
        <div className="file-buttons">
          <DownloadFileButton
            downloadFile={this.downloadFile}
            fileUrl={this.state.fileUrl}
          />
          {this.DownloadFileLink(this.props.fileName, this.state.fileContents)}
          <ViewFileButton
            viewFileContents={this.state.viewFileContents}
            getFileContents={this.getFileContents}
          />
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

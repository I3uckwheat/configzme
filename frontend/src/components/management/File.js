import React from "react";
import DownloadFileButton from "./buttons/DownloadFileButton";
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
          <button
            onClick={() => {
              this.showFileContents();
            }}
          >
            View
          </button>
          <button>Edit</button>
          <button
            onClick={() => {
              this.props.deleteFile(this.props.fileName);
            }}
          >
            Delete
          </button>
        </div>
        <this.FileContents />
      </div>
    );
  }
}

export default File;

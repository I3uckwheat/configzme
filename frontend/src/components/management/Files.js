import React from "react";
import File from "./File";

class Files extends React.Component {
  FileList = () => {
    const listFiles = this.props.fileNames.map((fileName, index) => (
      <li key={index}>
        <File
          fileName={fileName}
          deleteFile={this.props.deleteFile}
        />
      </li>
    ));

    return <ul>{listFiles}</ul>;
  };

  render() {
    return (
      <this.FileList
        key={this.props.fileKey}
        className="file"
        files={this.files}
      />
    );
  }
}

export default Files;

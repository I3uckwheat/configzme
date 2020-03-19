import React from "react";
import File from "./File";

class Files extends React.Component {
  deleteFile = async filename => {
    console.log("File Deleted");

    await fetch(`/${filename}?api=true`, {
      method: "DELETE"
    });

    this.FileList();
  };

  FileList = () => {
    const files = this.props.fileNames;
    const listFiles = files.map((fileName, index) => (
      <li key={index}>
        <File fileName={fileName} deleteFile={this.deleteFile} />
      </li>
    ));

    return <ul>{listFiles}</ul>;
  };

  render() {
    return <this.FileList className="file" files={this.files} />;
  }
}

export default Files;

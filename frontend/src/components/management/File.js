import React from "react";
import DownloadFile from "./buttons/DownloadFile";
import EditFile from "./buttons/EditFile";
import DeleteFile from "./buttons/DeleteFile";

class File extends React.Component {
  render() {
    return (
      <div className="file">
        <p>{this.props.fileName}</p>
        <DownloadFile />
        <EditFile />
        <DeleteFile
          deleteFile={this.props.deleteFile}
          fileName={this.props.fileName}
        />
      </div>
    );
  }
}

export default File;

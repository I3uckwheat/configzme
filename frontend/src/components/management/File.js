import React from "react";
import DownloadFile from "./buttons/DownloadFile";
import EditFile from "./buttons/EditFile";
import DeleteFile from "./buttons/DeleteFile";

class File extends React.Component {
  render() {
    return (
      <div className="file">
        <p>Filename</p>
        <DownloadFile />
        <EditFile />
        <DeleteFile />
      </div>
    );
  }
}

export default File;

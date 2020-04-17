import React from "react";
import File from "./File";

function Files(props) {
  const files = props.fileNames.map((fileName) => (
    <li key={fileName}>
      <File
        fileName={fileName}
        deleteFile={props.deleteFile}
      />
    </li>
  ));

  return (
    <ul>
      {files}
    </ul>
  );
}

export default Files;

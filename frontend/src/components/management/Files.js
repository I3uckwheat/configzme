import React from "react";
import File from "./File";

function Files(props) {
  return (
    <ul>
      {props.fileNames.map((fileName) => (
        <li key={fileName}>
          <File
            fileName={fileName}
            deleteFile={props.deleteFile}
          />
        </li>
      ))}
    </ul>
  );
}

export default Files;

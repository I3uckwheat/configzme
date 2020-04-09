import React from "react";

class DownloadButton extends React.Component {

  render() {
    return (
      <a
      href={`data:text/plain;charset=utf-8,${encodeURIComponent(
        this.props.fileContents
      )}`}
      download={`${this.props.fileName}.txt`}
      className="psuedo-button"
      >
        Download
      </a>
    );
  }
}

export default DownloadButton;

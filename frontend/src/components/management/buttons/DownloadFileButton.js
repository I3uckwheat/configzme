import React from "react";
import "../../../css/buttons.css";

class DownloadFileButton extends React.Component {
  render() {
    return (
      <a
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
          this.props.contents
        )}`}
        download={`${this.props.filename}.txt`}
        className="psuedo-button"
      >
        Download
      </a>
    );
  }
}

export default DownloadFileButton;

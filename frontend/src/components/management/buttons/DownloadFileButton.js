import React from "react";

class DownloadFileButton extends React.Component {
  render() {
    return (
      <a
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
          this.props.contents
        )}`}
        download={`${this.props.filename}.txt`}
      >
        Download
      </a>
    );
  }
}

export default DownloadFileButton;

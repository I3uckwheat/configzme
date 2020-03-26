import React from "react";

class DownloadFileButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.downloadFile();
        }}
      >
        Download
      </button>
    );
  }
}

export default DownloadFileButton;

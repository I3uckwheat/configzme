import React from "react";

class ViewFile extends React.Component {
  render() {
    return <p>{this.props.fileContents}</p>;
  }
}

export default ViewFile;

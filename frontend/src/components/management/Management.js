import React from "react";
import NewFileButton from "./buttons/NewFile";
import File from "./File";

class Management extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1>Configz.me</h1>
          <h3>[Insert captivating slogan here]</h3>
        </header>
        <div className="management" >
          <NewFileButton />
          <File />
          <File />
          <File />
        </div>
      </React.Fragment>
    );
  }
}

export default Management;

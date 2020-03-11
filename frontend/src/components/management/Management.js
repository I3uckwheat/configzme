import React from "react";
import NewFileButton from "./buttons/NewFile";
import File from "./File";
import Header from "../header/Header";

class Management extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="management">
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

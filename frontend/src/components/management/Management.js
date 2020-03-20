import React from "react";
import Files from "./Files";
import Header from "../header/Header";

class Management extends React.Component {
  deleteFile = async filename => {
    console.log("File Deleted");

    await fetch(`/${filename}?api=true`, {
      method: "DELETE"
    });
    this.props.getFiles();
  };

  componentDidMount() {
    this.props.getFiles();
  }

  render() {
    const filesFound = () => {
      if (this.props.filesFound) {
        return (
          <Files
            fileNames={this.props.fileNames}
            deleteFile={this.deleteFile}
          />
        );
      } else {
        return <p>No Files Found.</p>;
      }
    };

    return (
      <React.Fragment>
        <Header
          toggleForm={this.props.toggleForm}
          showLoginForm={this.props.showLoginForm}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          attemptLogin={this.props.attemptLogin}
          addFile={this.props.addFile}
        />
        {/* 
          Look up form handling in React
          TODO create modal form that takes file name 
          and includes a Submit button.
        */}
        <div className="management">{filesFound()}</div>
      </React.Fragment>
    );
  }
}

export default Management;

import React from "react";
import Files from "./Files";
import Header from "../header/Header";

class Management extends React.Component {
  componentDidMount() {
    this.props.getFiles();
  }

  render() {
    const filesFound = () => {
      if (this.props.filesFound) {
        return <Files fileNames={this.props.fileNames} />;
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
          TODO create form that takes file name 
          and includes a Submit button.
        */}
        <div className="management">{filesFound()}</div>
      </React.Fragment>
    );
  }
}

export default Management;

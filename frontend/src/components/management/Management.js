import React from "react";
import Files from "./Files";
import Header from "../header/Header";

class Management extends React.Component {
  state = {
    showAddFile: false,
    fileName: ""
  };

  componentDidMount() {
    this.props.getFiles();
  }

  deleteFile = async filename => {
    console.log("File Deleted");

    await fetch(`/${filename}?api=true`, {
      method: "DELETE"
    });
    this.props.getFiles();
  };

  showAddFileForm = state => {
    if (state) {
      this.setState({ showAddFile: false });
    } else {
      this.setState({ showAddFile: true });
    }
  };

  setFileName = event => {
    this.setState({ fileName: event.target.value });
  };

  setFile = event => {
    this.setState({ file: event.target.files[0] });
  };

  fileSubmitHandler = event => {
    event.preventDefault();

    if (this.state.file && this.state.fileName) {
      this.props.addFile(this.state.file, this.state.fileName);
      this.setState({
        showAddFile: false,
        fileName: ""
      });
    }
  };

  render() {
    const filesFound = () => {
      if (this.props.filesFound) {
        return (
          <Files
            fileNames={this.props.fileNames}
            deleteFile={this.deleteFile}
            editFile={this.props.editFile}
            fileName={this.state.fileName}
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
          showAddFile={this.state.showAddFile}
          fileName={this.state.fileName}
          file={this.state.file}
          showAddFileForm={this.showAddFileForm}
          setFileName={this.setFileName}
          setFile={this.setFile}
          fileSubmitHandler={this.fileSubmitHandler}
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

import React from "react";
import Files from "./Files";
import Header from "../header/Header";

class Management extends React.Component {
  state = {
    showAddFile: false,
    fileName: "",
    filesFound: null,
    fileNames: null
  };

  componentDidMount() {
    this.getFileNames();
  }

  getFileNames = async () => {
    try {
      const response = await fetch("/files?api=true");
      const data = await response.json();
      this.setState({
        filesFound: true,
        fileNames: data
      });
    } catch (e) {
      console.log(e);
      console.log("Error!");
    }
  };

  deleteFile = async filename => {
    console.log("File Deleted");

    await fetch(`/${filename}?api=true`, {
      method: "DELETE"
    });
    this.getFileNames();
  };

  showAddFileForm = state => {
    if (state) {
      this.setState({ showAddFile: false });
    } else {
      this.setState({ showAddFile: true });
    }
  };

  addFile = async (file, fileName) => {
    const url = `/${fileName}?api=true`;

    try {
      const formData = new FormData();
      const FileAdded = file;

      formData.append("file", FileAdded);

      const sendFile = await fetch(url, {
        method: "POST",
        body: formData
      });

      const data = await sendFile;
      console.log(data);
      this.getFileNames();
    } catch (event) {
      console.log("Error!", event);
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
      this.addFile(this.state.file, this.state.fileName);
      this.setState({
        showAddFile: false,
        fileName: ""
      });
    }
  };

  render() {
    const fileList = () => {
      if (this.state.filesFound) {
        return (
          <Files
            fileNames={this.state.fileNames}
            deleteFile={this.deleteFile}
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
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          addFile={this.addFile}
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
        <div className="management">{fileList()}</div>
      </React.Fragment>
    );
  }
}

export default Management;

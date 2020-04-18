import React from "react";
import Files from "./Files";
import Header from "../Header";

class Management extends React.Component {
  state = {
    showAddFile: false,
    fileName: "",
    filesFound: null,
    fileNames: null,
    file: null,
    NoFileEntered: false,
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

  fileList = () => {
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

  deleteFile = async filename => {
    console.log("File Deleted");

    await fetch(`/${filename}?api=true`, {
      method: "DELETE"
    });
    this.getFileNames();
  };

  showAddFileForm = showForm => {
    if (showForm) {
      this.setState({ 
        showAddFile: false,
        fileName: "",
        NoFileEntered: false
      });
      
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
    this.setState({ 
      file: event.target.files[0],
      NoFileEntered: false
    });
  };

  fileSubmitHandler = event => {
    event.preventDefault();

    if (this.state.file && this.state.fileName) {
      this.addFile(this.state.file, this.state.fileName);
      this.setState({
        showAddFile: false,
        fileName: "",
        file: null
      });
    } else if (this.state.file === null) {
      console.log("No file found!");
      this.setState({NoFileEntered: true})
    }
  };

  render() {
    return (
      <>
        <Header
          loggedIn={this.props.loggedIn}
          showAddFile={this.state.showAddFile}
          fileName={this.state.fileName}
          showAddFileForm={this.showAddFileForm}
          setFileName={this.setFileName}
          setFile={this.setFile}
          fileSubmitHandler={this.fileSubmitHandler}
          NoFileEntered={this.state.NoFileEntered}
        />
        <div className="management">{this.fileList()}</div>
      </>
    );
  }
}

export default Management;

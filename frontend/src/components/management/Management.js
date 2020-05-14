import React from "react";
import Files from "./Files";
import Header from "../Header";
import TitleBar from "../TitleBar";
import "../../css/management.css";

class Management extends React.Component {
  state = {
    showAddFile: false,
    fileName: "",
    filesFound: null,
    fileNames: [],
    file: null,
    enteredFileName: '',
    NoFileEntered: false,
    noFilename: false
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
    if (this.state.fileNames.length >= 1) {
      return <Files fileNames={this.state.fileNames} getFileNames={this.getFileNames} />;
    } else {
      return <p className="no-files">No Files Found.</p>;
    }
  };

  showAddFileForm = showForm => {
    if (showForm) {
      this.setState({ 
        showAddFile: false,
        fileName: "",
        NoFileEntered: false,
        enteredFileName: ""
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
    const filename = this.state.fileName
    filename === '' ? this.setState({ noFilename: true }) : this.setState({ noFilename: false });
    this.setState({ fileName: event.target.value });
  };

  setFile = event => {
    this.setState({ 
      file: event.target.files[0],
      enteredFileName: event.target.files[0].name,
      NoFileEntered: false
    });
  };

  fileSubmitHandler = event => {
    event.preventDefault();

    if (this.state.fileName === '') {
      this.setState({ noFilename: true })
    }

    if (this.state.file && this.state.fileName.length >= 1) {
      this.addFile(this.state.file, this.state.fileName);
      this.setState({
        showAddFile: false,
        fileName: "",
        file: null,
        enteredFileName: '',
      });
    } else if (this.state.file === null) {
      console.log("No file found!");
      this.setState({NoFileEntered: true})
    }
  };

  render() {
    return (
      <>
        <TitleBar />
        <Header
          loggedIn={this.props.loggedIn}
          showAddFile={this.state.showAddFile}
          fileName={this.state.fileName}
          showAddFileForm={this.showAddFileForm}
          setFileName={this.setFileName}
          setFile={this.setFile}
          fileSubmitHandler={this.fileSubmitHandler}
          NoFileEntered={this.state.NoFileEntered}
          enteredFileName={this.state.enteredFileName}
          noFilename={this.state.noFilename}
        />
        <div className="management">{this.fileList()}</div>
      </>
    );
  }
}

export default Management;

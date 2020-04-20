import React from "react";
import AddFileModal from "./management/AddFileModal";
import "../css/header.css"
import "../css/buttons.css";

class Header extends React.Component {
  logout = async () => {
    await fetch("/logout?api=true", {
      method: "DELETE"
    });

    window.location.reload();
  };

  addFileForm() {
    if (this.props.showAddFile) {
      return (
        <AddFileModal 
          showAddFileForm={this.props.showAddFileForm}
          showAddFile={this.props.showAddFile}
          fileSubmitHandler={this.props.fileSubmitHandler}
          setFileName={this.props.setFileName}
          setFile={this.props.setFile}
          NoFileEntered={this.props.NoFileEntered}
        />
      )
    }
  }

  showbuttons = () => {
    if (this.props.loggedIn) {
      return (
        <>
          <button
            onClick={() => {
              this.props.showAddFileForm(this.props.showAddFile);
            }}
          >
            + New File
          </button>
          {this.addFileForm()}
          <button
            onClick={() => {
              this.logout();
            }}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="base blue"
            onClick={() => {
              this.props.toggleLoginModal(this.props.showLoginModal);
            }}
          >
            Log In
          </button>
          <button className="base blue">Register</button>
        </>
      );
    }
  };

  CrashIndicator = () => {
    if (this.props.appCrashed) {
      return <p className="crash-indicator">Something went wrong. We're working on it.</p>;
    }
  }

  render() {
    return (
      <header className="header">
        {this.CrashIndicator()}
        <h1 className="page-title">Configz.me</h1>
        <div className="buttons">{this.showbuttons()}</div>
      </header>
    );
  }
}

export default Header;

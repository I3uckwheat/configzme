import React from "react";
import "../css/header.css"
import "../css/modal-style.css"
import AddFileModal from "./management/AddFileModal";

class Header extends React.Component {
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
              this.props.logout();
            }}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <button>Register</button>
          <button
            onClick={() => {
              this.props.toggleLoginModal(this.props.showLoginModal);
            }}
          >
            Log In
          </button>
        </>
      );
    }
  };

  CrashIndicator = () => {
    if (this.props.appCrashed) {
      return (
        <p className="crash-indicator">Whoops. Something went wrong. We're working on it.</p>
      )
    }
  }

  render() {
    return (
      <header className="header">
        {this.CrashIndicator()}
        <h1>Configz.me</h1>
        <h3>[Insert captivating slogan here]</h3>
        <div className="buttons">{this.showbuttons()}</div>
      </header>
    );
  }
}

export default Header;

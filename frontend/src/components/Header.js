import React from "react";
import "../css/header.css"
import "../css/modal-style.css"

class Header extends React.Component {
  addFileForm() {
    const form = (
      <div className="modal">
        <div className="modal-content">
          
          <form
            className={"add-file-form"}
            encType="multipart/form-data"
            method="POST"
            autoComplete="off"
            onSubmit={this.props.fileSubmitHandler}
          >
            
            <label htmlFor="file-name">Enter File Name:</label>
            <input
              type="text"
              htmlFor="file-name"
              name="file-name"
              onChange={this.props.setFileName}
              value={this.props.fileName}
            ></input>

            <label htmlFor="file">Add a File:</label>
            <input
              type="file"
              name="file"
              id="file"
              className="inputfile"
              onChange={this.props.setFile}
            />
            <div className="form-buttons">
              <button 
                onClick={() => {
                  this.props.showAddFileForm(this.props.showAddFile);
                }}
                className="close-modal">
                  Cancel
              </button>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>        
      </div>
    );

    return this.props.showAddFile ? form : null;
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

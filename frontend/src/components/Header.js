import React from "react";
// import Buttons from "./buttons/Buttons";

class Header extends React.Component {
  addFileForm() {
    const form = (
      <form
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
        <input type="submit" value="Submit"></input>
      </form>
    );

    if (this.props.showAddFile) {
      return form;
    } else {
      return null;
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
              this.props.toggleLoginForm(this.props.showLoginForm);
            }}
          >
            Log In
          </button>
        </>
      );
    }
  };

  render() {
    return (
      <header className="header">
        <h1>Configz.me</h1>
        <h3>[Insert captivating slogan here]</h3>
        <div className="buttons-container">{this.showbuttons()}</div>
      </header>
    );
  }
}

export default Header;

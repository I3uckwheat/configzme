import React from "react";
import "../css/header.css"
import AddFileModal from "./management/AddFileModal";
import Button from "./Button";

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
          <Button
            function={this.props.showAddFileForm}
            argument={this.props.showAddFile}
            buttontext="+ New File"
            styles="base green"
          />
          {this.addFileForm()}
          <Button 
            function={this.logout}
            buttontext="Logout"
            styles="base blue"
          />
        </>
      );
    } else {
      return (
        <>
          <Button 
            styles="base blue"
            function={this.props.toggleLoginModal}
            argument={this.props.showLoginModal}
            buttontext="Log In"
          />
          <Button styles="base blue" buttontext="Register" />
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

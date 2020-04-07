import React from "react";
import Buttons from "./buttons/Buttons";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Configz.me</h1>
        <h3>[Insert captivating slogan here]</h3>
        <Buttons
          showLoginForm={this.props.showLoginForm}
          toggleLoginForm={this.props.toggleLoginForm}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          addFile={this.props.addFile}
          showAddFile={this.props.showAddFile}
          fileName={this.props.fileName}
          file={this.props.file}
          showAddFileForm={this.props.showAddFileForm}
          setFileName={this.props.setFileName}
          setFile={this.props.setFile}
          fileSubmitHandler={this.props.fileSubmitHandler}
        />
      </header>
    );
  }
}

export default Header;

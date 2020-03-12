import React from "react";
import File from "./File";
import Header from "../header/Header";

class Management extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          toggleForm={this.props.toggleForm}
          showLoginForm={this.props.showLoginForm}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
        />
        <div className="management">
          <File />
          <File />
          <File />
        </div>
      </React.Fragment>
    );
  }
}

export default Management;

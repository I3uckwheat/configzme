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
          toggleForm={this.props.toggleForm}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          attemptLogin={this.props.attemptLogin}
          toggleAddFileForm={this.props.toggleAddFileForm}
          showAddFileForm={this.props.showAddFileForm}
        />
      </header>
    );
  }
}

export default Header;

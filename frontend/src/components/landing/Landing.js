import React from "react";
import "../../css/landing.css";
import FeatureList from "./FeatureList";
import LoginForm from "./LoginForm";
import Header from "../header/Header";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <Header
          toggleForm={this.props.toggleForm}
          showLoginForm={this.props.showLoginForm}
          loggedIn={this.props.loggedIn}
        />
        <div className="content">
          {this.props.showLoginForm ? (
            <LoginForm attemptLogin={this.props.attemptLogin} />
          ) : null}
          <div className="commands">
            <FeatureList />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

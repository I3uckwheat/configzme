import React from "react";
import "../../css/landing.css";
import FeatureList from "./FeatureList";
import Buttons from "./buttons/Buttons";
import LoginForm from "./LoginForm";
import Header from "../header/Header";

class Landing extends React.Component {
  render() {
    if (this.props.showLoginForm === true) {
    }

    return (
      <div className="landing">
        <Header />
        <div className="content">
          <Buttons
            showLoginForm={this.props.showLoginForm}
            toggleForm={this.props.toggleForm}
          />
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

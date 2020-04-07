import React from "react";
import "../../css/landing.css";
import FeatureList from "./FeatureList";
import LoginForm from "./LoginForm";
import Header from "../header/Header";

class Landing extends React.Component {
  state = {
    showLoginForm: false,
  };

  toggleLoginForm = LoginFormstatus => {
    if (!LoginFormstatus) {
      this.setState({ showLoginForm: true });
    } else {
      this.setState({ showLoginForm: false });
    }
  };

  render() {
    return (
      <div className="landing">
        <Header
          toggleLoginForm={this.toggleLoginForm}
          showLoginForm={this.state.showLoginForm}
          loggedIn={this.props.loggedIn}
        />
        <div className="content">
          {this.state.showLoginForm ? (
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

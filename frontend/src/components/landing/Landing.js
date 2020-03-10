import React from "react";
import "../../css/landing.css";
import FeatureList from "./FeatureList";
import Buttons from "./buttons/Buttons";
import LoginForm from "./LoginForm";

class Landing extends React.Component {
  render() {

    if (this.props.showLoginForm === true) {

    }

    return (
      <div className="landing">
        <header className="header">
          <h1>Configz.me</h1>
          <h3>[Insert captivating slogan here]</h3>
        </header>
        <div className="content">
          <Buttons showLoginForm={this.props.showLoginForm} toggleForm={this.props.toggleForm}/>
          {this.props.showLoginForm ? <LoginForm /> : null}
          <div className="commands">
            <FeatureList />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

import React from "react";
import Header from "./Header";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import TitleBar from "./TitleBar";
import "../css/landing.css";

class Landing extends React.Component {
  state = {
    showLoginModal: false,
    showRegisterModal: false,
  }

  toggleLoginModal = (modalStatus) => {
    modalStatus ? this.setState({ showLoginModal: false }) : this.setState({ showLoginModal: true });
  }

  toggleRegisterModal = (modalStatus) => {
    modalStatus ? this.setState({ showRegisterModal: false }) : this.setState({ showRegisterModal: true });
  }

  LoginForm = () => {
    if (this.state.showLoginModal) {
      return (
        <LoginModal 
          attemptLogin={this.props.attemptLogin}
          showLoginModal={this.state.showLoginModal} 
          toggleLoginModal={this.toggleLoginModal}
        />
      )
    }
  }

  RegisterForm = () => {
    if (this.state.showRegisterModal) {
      return (
        <RegisterModal
          showRegisterModal={this.state.showRegisterModal} 
          toggleRegisterModal={this.toggleRegisterModal}
          attemptRegistration={this.props.attemptRegistration}
        />
      )
    }
  }

  configzCommands = () => {
    return (
      <div className="commands">
        <div className="feature">
          <p className="feature-name">Directions:</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl https://configz.me</span>
          </p>
        </div>
        <div className="feature">
          <p className="feature-name">Register:</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl -u &lt;username&gt; -X POST https://configz.me</span>
          </p>
        </div>
        <div className="feature">
          <p className="feature-name">Uploading Files:</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl -u &lt;username&gt; -F file=@&lt;your file&gt; https://configz.me/&lt;filename&gt;</span>
          </p>
        </div>
        <div className="feature">
          <p className="feature-name">Getting Files:</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl -u &lt;username&gt; https://configz.me/&lt;filename&gt;</span>
          </p>
        </div>
        <div className="feature">
          <p className="feature-name">Listing Files</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl -u &lt;username&gt; https://configz.me/files</span>
          </p>
        </div>
        <div className="feature">
          <p className="feature-name">Updating Files:</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl -u &lt;username&gt; -F file=@&lt;your file&gt; https://configz.me/&lt;filename&gt;/update</span>
          </p>
        </div>
        <div className="feature">
          <p className="feature-name">Deleting Files:</p>
          <p>
            <span className="bracket">></span>
            <span className="command">curl -u &lt;username&gt; https://configz.me/&lt;filename&gt;/destroy</span>
          </p>
        </div>
      </div>
    )
  }

  CrashIndicator = () => {
    return this.props.appCrashed ? <p className="crash-indicator">Something went wrong. We're on it!</p> : null;
  }

  render() {
    return (
      <div className="landing">
        <TitleBar />
        {this.CrashIndicator()}
        <div className="content">
          <Header
            toggleLoginModal={this.toggleLoginModal}
            showLoginModal={this.state.showLoginModal}
            toggleRegisterModal={this.toggleRegisterModal}
            showRegisterModal={this.state.showRegisterModal}
            appCrashed={this.props.appCrashed}
          />
          {this.LoginForm()}
          {this.RegisterForm()}
          {this.configzCommands()}
        </div>
      </div>
    );
  }
}

export default Landing;

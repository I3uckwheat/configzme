import React from "react";
import Header from "./Header";
import LoginModal from "./LoginModal";
import TitleBar from "./TitleBar";
import "../css/landing.css";

class Landing extends React.Component {
  state = {
    showLoginModal: false,
  }

  toggleLoginModal = (modalStatus) => {
    modalStatus ? this.setState({ showLoginModal: false }) : this.setState({ showLoginModal: true });
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

  render() {
    return (
      <div className="landing">
        <TitleBar />
        <div className="content">
          <Header
            toggleLoginModal={this.toggleLoginModal}
            showLoginModal={this.state.showLoginModal}
            appCrashed={this.props.appCrashed}
          />
          {this.LoginForm()}
          {this.configzCommands()}
        </div>
      </div>
    );
  }
}

export default Landing;

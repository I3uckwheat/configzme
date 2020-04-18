import React from "react";
import "../css/landing.css";
import "../css/featurelist.css"
import "../css/modal-style.css"
import Header from "./Header";
import LoginModal from "./LoginModal";
import TitleBar from "./TitleBar";

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
        <div className="start-command">
          <p><span className="name">Run</span>:<span className="command">curl https://configz.me</span></p>
        </div>
        <div className="features">
          <div className="feature">
            <p><span className="name">Register</span>: <span className="command">curl -u &lt;username&gt; -X POST https://configz.me</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Uploading Files</span>: <span className="command">curl -u &lt;username&gt; -F file=@&lt;your file&gt; https://configz.me/&lt;filename&gt;</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Getting Files</span>: <span className="command">curl -u &lt;username&gt; https://configz.me/&lt;filename&gt;</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Listing Files</span>: <span className="command">curl -u &lt;username&gt; https://configz.me/files</span></p>
          </div>
          <div className="feature">
            <p><span className="name">Updating Files</span>: <span className="command">curl -u &lt;username&gt; -F file=@&lt;your file&gt; https://configz.me/&lt;filename&gt;/update</span></p>
          </div>
          <div className="feature">
              <p><span className="name">Deleting Files</span>: <span className="command">curl -u &lt;username&gt; https://configz.me/&lt;filename&gt;/destroy</span></p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="landing">
        <TitleBar />
        <Header
          toggleLoginModal={this.toggleLoginModal}
          showLoginModal={this.state.showLoginModal}
          appCrashed={this.props.appCrashed}
        />
        <div className="content">
          {this.LoginForm()}
          {this.configzCommands()}
        </div>
      </div>
    );
  }
}

export default Landing;

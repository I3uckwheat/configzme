import React from "react";
import "../css/landing.css";
import "../css/featurelist.css"
import "../css/modal-style.css"
import Header from "./Header";
import LoginModal from "./LoginModal";

class Landing extends React.Component {
  state = {
    showLoginForm: false,
  };

  toggleLoginForm = LoginFormstatus => {
    LoginFormstatus ? this.setState({ showLoginForm: false }) : this.setState({ showLoginForm: true });
  };

  LoginForm = () => {
    if (this.state.showLoginForm) {
      return (
        <LoginModal 
          showLoginForm={this.state.showLoginForm} 
          attemptLogin={this.props.attemptLogin}
          toggleLoginForm={this.toggleLoginForm}
        />
      )
    }
  }

  render() {
    return (
      <div className="landing">
        <Header
          toggleLoginForm={this.toggleLoginForm}
          showLoginForm={this.state.showLoginForm}
          appCrashed={this.props.appCrashed}
        />
        <div className="content">
          {this.LoginForm()}
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
        </div>
      </div>
    );
  }
}

export default Landing;

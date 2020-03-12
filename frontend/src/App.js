import React from "react";
import Landing from "./components/landing/Landing";
import Management from "./components/management/Management";

class App extends React.Component {
  state = {
    username: null,
    showLoginForm: false
  };

  toggleForm = formstatus => {
    if (formstatus === false) {
      formstatus = true;
      this.setState({ showLoginForm: formstatus });
    } else {
      formstatus = false;
      this.setState({ showLoginForm: formstatus });
    }
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  async checkLoginStatus() {
    console.log("checking login status");

    try {
      const response = await fetch("/init?api=true");
      console.log(response);

      const data = await response.json();
      console.log(data);

      this.setState({ username: data.username });
    } catch (e) {
      console.log(e);
      console.log("Error!");
    }
  }

  attemptLogin = async (username, password) => {
    console.log(username, password);
    const response = await fetch("/login?api=true", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();
    this.setState({ username: data.username });
  };

  logout = () => {
    // TODO
    // POST/logout route here.
    window.location.reload();
  };

  render() {
    const userView = username => {
      if (username) {
        return (
          <Management
            loggedIn={this.state.username}
            toggleForm={this.toggleForm}
            attemptLogin={this.attemptLogin}
          />
        );
      } else {
        return (
          <Landing
            loggedIn={this.state.username}
            showLoginForm={this.state.showLoginForm}
            toggleForm={this.toggleForm}
            attemptLogin={this.attemptLogin}
          />
        );
      }
    };

    return <div className="App">{userView(this.state.username)}</div>;
  }
}

export default App;

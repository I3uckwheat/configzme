import React from "react";
import Landing from "./components/Landing";
import Management from "./components/management/Management";

class App extends React.Component {
  state = {
    username: null,
    appCrashed: false,
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus = async () => {
    try {
      const response = await fetch("/init?api=true");
      const data = await response.json();

      this.setState({ username: data.username });
    } catch (e) {
      this.setState({appCrashed: true})
      console.log("Error!");
      console.log(e);
    }
  };

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
    const status = await response.status;
    if (status === 201) {
      this.setState({ username: username });
    }
  };

  logout = async () => {
    await fetch("/logout?api=true", {
      method: "DELETE"
    });

    window.location.reload();
  };

  userView = username => {
    if (this.state.appCrashed) {
      return (
        <Landing attemptLogin={this.attemptLogin} appCrashed={this.state.appCrashed}/>
      )
    } else {
      if (username) {
        return (
          <Management
            loggedIn={this.state.username}
            logout={this.logout}
          />
        );
      } else {
        return (
          <Landing attemptLogin={this.attemptLogin} appCrashed={this.state.appCrashed}/>
        );
      }
    }
  };

  render() {
    return (
      <div className="App">
        {this.userView(this.state.username)}
      </div>
    );
  }
}

export default App;

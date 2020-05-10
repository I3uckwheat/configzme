import React from "react";
import Landing from "./components/Landing";
import Management from "./components/management/Management";
import "./css/app.css";

class App extends React.Component {
  state = {
    username: null,
    appCrashed: false,
    usernameTaken: false,
    badCredentials: false
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

  attemptRegistration = async (username, password) => {
    console.log("Registration Attempted");
    
    try {
      const response = await fetch("/register?api=true", {
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
      console.log(data);
      
      const status = response.status;
      console.log(status);
      
      if (status === 409) {
        this.setState({ usernameTaken: true });
        console.log(this.state.usernameTaken);
      }
      
    } catch (e) {
      console.log(e);
    }
  };

  attemptLogin = async (username, password) => {
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
    const status = response.status;
    if (status === 201) this.setState({ username: username });
    if (status === 403 && username !== '' && password !== '') {
      this.setState({ badCredentials: true });
    } 
  };

  userView = username => {
    if (this.state.appCrashed) {
      return <Landing attemptLogin={this.attemptLogin} appCrashed={this.state.appCrashed} />;
    } else {
      if (username) {
        return <Management loggedIn={this.state.username} />;
      } else {
        return (
          <Landing 
            attemptLogin={this.attemptLogin}
            attemptRegistration={this.attemptRegistration}
            badCredentials={this.state.badCredentials}
          />
        )
      }
    }
  };

  render() {
    return <div className="App">{this.userView(this.state.username)}</div>;
  }
}

export default App;

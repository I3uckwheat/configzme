import React from "react";
import Landing from "./landing/Landing";
import Management from "./management/Management";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: null,
    showLoginForm: false,
  };

  toggleForm = (formstatus) => {
    if (formstatus === false) {
      formstatus = true;
      this.setState({showLoginForm: formstatus})
    } else {
      formstatus = false;
      this.setState({showLoginForm: formstatus})
    }
  }

  render() {
    const userView = isLoggedIn => {
      if (isLoggedIn) {
        return <Management />;
      } else {
        return <Landing showLoginForm={this.state.showLoginForm} toggleForm={this.toggleForm}/>;
      }
    };

    return <div className="App">{userView(this.state.isLoggedIn)}</div>;
  }
}

export default App;

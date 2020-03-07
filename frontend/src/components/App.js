import React from "react";
import Landing from "./landing/Landing";
import Management from "./management/Management";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: null
  };

  render() {
    const userView = isLoggedIn => {
      if (isLoggedIn) {
        return <Management />;
      } else {
        return <Landing className="landing"/>;
      }
    };

    return <div className="App">{userView(this.state.isLoggedIn)}</div>;
  }
}

export default App;

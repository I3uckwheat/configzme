import React from "react";
import "../css/App.css";
import Landing from "./landing/Landing";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: null,
  };

  render() {
    const userView = (isLoggedIn) => {
      if (isLoggedIn) {
        console.log("Logged in!");
      } else {
        console.log("Not Logged in!");
        return <Landing />;
      }
    }

    return (
      <div className="App">
        { userView(this.state.isLoggedIn) }
      </div>
    );
  }
}

export default App;

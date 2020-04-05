import React from "react";
import Landing from "./components/landing/Landing";
import Management from "./components/management/Management";

class App extends React.Component {
  state = {
    username: null,
    showLoginForm: false,
    filesFound: null,
    fileNames: null
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

  checkLoginStatus = async () => {
    // TODO Tell user if backend has crashed

    try {
      const response = await fetch("/init?api=true");

      const data = await response.json();

      this.setState({ username: data.username });
    } catch (e) {
      console.log(e);
      console.log("Error!");
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

  getFileNames = async () => {
    try {
      const response = await fetch("/files?api=true");
      const data = await response.json();
      this.setState({
        filesFound: true,
        fileNames: data
      });
    } catch (e) {
      console.log(e);
      console.log("Error!");
    }
  };

  addFile = async (file, fileName) => {
    const url = `/${fileName}?api=true`;

    try {
      const formData = new FormData();
      const FileAdded = file;

      formData.append("file", FileAdded);

      const sendFile = await fetch(url, {
        method: "POST",
        body: formData
      });

      const data = await sendFile;
      console.log(data);
      this.getFileNames();
    } catch (event) {
      console.log("Error!", event);
    }
  };

  render() {
    const userView = username => {
      if (username) {
        return (
          <Management
            showLoginForm={this.state.showLoginForm}
            loggedIn={this.state.username}
            filesFound={this.state.filesFound}
            toggleForm={this.toggleForm}
            attemptLogin={this.attemptLogin}
            logout={this.logout}
            getFiles={this.getFileNames}
            fileNames={this.state.fileNames}
            addFile={this.addFile}
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

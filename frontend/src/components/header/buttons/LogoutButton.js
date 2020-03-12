import React from "react";

class LogoutButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.logout();
        }}
      >
        Logout
      </button>
    );
  }
}

export default LogoutButton;

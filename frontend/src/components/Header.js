import React from "react";
import "../css/header.css"
import AddFileModal from "./management/AddFileModal";
import Button from "./Button";

function Header(props) {
  async function logout() {
    await fetch("/logout?api=true", {
      method: "DELETE"
    });

    window.location.reload();
  };

  function addFileForm() {
    if (props.showAddFile) {
      return (
        <AddFileModal 
          showAddFileForm={props.showAddFileForm}
          showAddFile={props.showAddFile}
          fileSubmitHandler={props.fileSubmitHandler}
          setFileName={props.setFileName}
          setFile={props.setFile}
          NoFileEntered={props.NoFileEntered}
          enteredFileName={props.enteredFileName}
          title="New File"
        />
      )
    }
  }

  function showbuttons() {
    if (props.loggedIn) {
      return (
        <>
          <Button
            function={props.showAddFileForm}
            argument={props.showAddFile}
            buttontext="+ New File"
            styles="base green"
          />
          {addFileForm()}
          <Button 
            function={logout}
            buttontext="Logout"
            styles="base blue"
          />
        </>
      );
    } else {
      return (
        <>
          <Button 
            function={props.toggleLoginModal}
            argument={props.showLoginModal}
            buttontext="Log In"
            styles="base blue"
          />
          <Button styles="base blue" buttontext="Register" />
        </>
      );
    }
  };

  return (
    <header className="header">
      <h1 className="page-title">Configz.me</h1>
      <div className="buttons">{showbuttons()}</div>
    </header>
  );
}

export default Header;

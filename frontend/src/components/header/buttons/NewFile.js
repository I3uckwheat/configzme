import React from "react";

class NewFileButton extends React.Component {
  render() {
    return (
      <form encType="multipart/form-data" action="" method="post">
        <label htmlFor="file">Add a File:</label>
        <input type="file" name="file" id="file" className="inputfile" />
      </form>
    );
  }
}

export default NewFileButton;

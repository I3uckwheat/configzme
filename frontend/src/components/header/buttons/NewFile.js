import React from "react";

class NewFileButton extends React.Component {
  render() {

    return (
      <form encType="multipart/form-data" action="" method="post">
        <label htmlFor="file">Add a File:</label>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={(event) => {
            // console.log(event.target.files[0]);
            // window.test = event.target.files[0];

            this.props.addFile(event.target.files[0]);
          }}
        />
      </form>
    );
  }
}

export default NewFileButton;

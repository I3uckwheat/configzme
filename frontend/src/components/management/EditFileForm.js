import React from "react";

class EditFileForm extends React.Component {
  // editedContents = event => {
  //   console.log(event.target.value);
  // };
  render() {
    return (
      <>
        <label htmlFor="file-content">File Content:</label>

        <textarea
          id="file-content"
          rows="4"
          cols="50"
          defaultValue={this.props.fileContents}
        ></textarea>
      </>
    );
  }
}

export default EditFileForm;

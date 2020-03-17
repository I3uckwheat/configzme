import React from "react";

class NewFileButton extends React.Component {
  state = {
    showAddFile: false,
    fileName: null,
  }

  showAddFileForm = (state) => {
    console.log("Show Add File Form");
    if (state) {
      this.setState({showAddFile: false})
    } else {
      this.setState({showAddFile: true})
    }
  }

  addFileName = (filename) => {
    // console.log(filename);
    return this.setState({fileName: filename})
  }

  render() {

    const AddFileForm =() => {
      const form = (
        <form encType="multipart/form-data" action={`${this.state.fileName}?api=true`} method="POST">
          <label htmlFor="file-name">Enter File Name:</label>
          <input type="text" htmlFor="file-name" name="file-name" onChange={(event) => {
            this.addFileName(event.target.value)
          }}>
          </input>

          <label htmlFor="file">Add a File:</label>
          <input
            type="file"
            name="file"
            id="file"
            className="inputfile"
            onSubmit={(event) => {
              // console.log(event.target.files[0]);
              // window.test = event.target.files[0];

              this.props.addFile(event.target.files[0], this.state.fileName);
            }}
          />
           <input type="submit" value="Submit" ></input>
        </form>
      )

      if (this.state.showAddFile) {
        return form;
      } else {
        return null;
      }
    }

    return (
      <>
        <button onClick={() => {this.showAddFileForm(this.state.showAddFile)}}>+ New File</button>
        <AddFileForm />
      </>
    );
  }
}

export default NewFileButton;

import React from "react";
import Modal from "../Modal";

class AddFileModal extends React.Component {

  render() {
    return (
      <Modal toggleModal={this.props.showAddFileForm} showModal={this.props.showAddFile}>
        <form
            className={"add-file-form"}
            encType="multipart/form-data"
            method="POST"
            autoComplete="off"
            onSubmit={this.props.fileSubmitHandler}
          >
            
            <label htmlFor="file-name">Enter File Name:</label>
            <input
              type="text"
              htmlFor="file-name"
              name="file-name"
              onChange={this.props.setFileName}
              value={this.props.fileName}
            ></input>

            <label htmlFor="file">Add a File:</label>
            <input
              type="file"
              name="file"
              id="file"
              className="inputfile"
              onChange={this.props.setFile}
            />
            <div className="form-buttons">
              <button 
                onClick={() => {
                  this.props.showAddFileForm(this.props.showAddFile);
                }}
                className="close-modal">
                  Cancel
              </button>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
      </Modal>
    );
  }
}

export default AddFileModal;

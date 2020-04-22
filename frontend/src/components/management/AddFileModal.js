import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import FileInput from "./FileInput";

function AddFileModal(props) {
  function NoFileError() {
    if (props.NoFileEntered) {
      return (
        <p>A file is required for submission.</p>
      )
    } else {
      return null;
    }
  }

  function EnteredFile() {
    if (props.enteredFileName) {
      return props.enteredFileName;
    }
  }
  
  return (
    <Modal toggleModal={props.showAddFileForm} showModal={props.showAddFile} isModal={true}>
      <NoFileError />
      <div className="modal-interior">
        <h1 className="modal-title">New File</h1>
        <form
            className="add-file-form"
            encType="multipart/form-data"
            method="POST"
            autoComplete="off"
            onSubmit={props.fileSubmitHandler}
          >
            <label 
              htmlFor="filenameinput"
              className="input-label"
            >
              Enter File Name:
            </label>
            <input
              type="text"
              htmlFor="filenameinput"
              name="filenameinput"
              onChange={props.setFileName}
              value={props.fileName}
              required="required"
              className="input-field"
            ></input>

            <label 
              htmlFor="file"
              className="input-label"  
            >
              Add a File:
            </label>
            <div className="file-input">
              <FileInput 
                type="file"
                name="file"
                id="file"
                onChange={props.setFile}
              />
              <span className="input-text entered-file">{EnteredFile()}</span>
            </div>
            <div className="buttons">
              <Button
                function={props.showAddFileForm}
                argument={props.showAddFile}
                styles="base white"
                buttontext="Cancel"
              />
              <Button
                styles="base green"
                type="submit"
                value="Submit"
                buttontext="Submit"
              />
            </div>
          </form>
      </div>
    </Modal>
  );
}

export default AddFileModal;

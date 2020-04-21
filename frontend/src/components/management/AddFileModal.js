import React from "react";
import Modal from "../Modal";
import Button from "../Button";

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
  
  return (
    <Modal toggleModal={props.showAddFileForm} showModal={props.showAddFile} isModal={true}>
      <NoFileError />
      <form
          className="add-file-form modal-interior"
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
          <input
            type="file"
            name="file"
            id="file"
            onChange={props.setFile}
          />
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
    </Modal>
  );
}

export default AddFileModal;

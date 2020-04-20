import React from "react";
import "../css/title-bar.css";

function TitleBar(props) {
  const redDot = (
    <span
      className="dot" 
      id="red-modal" 
      onClick={() => {
        props.toggleModal(props.showModal)
      }}></span>
  )
  const allDots = (
    <>
      <span className="dot" id="red"></span>
      <span className="dot" id="yellow"></span>
      <span className="dot" id="green"></span>
    </>
  )

  function ifModal() {
    return props.isModal ? redDot : allDots;
  }

  return <div className="dots">{ifModal()}</div>;
}

export default TitleBar;

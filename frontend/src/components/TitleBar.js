import React from "react";
import "../css/title-bar.css";

function TitleBar() {
  return (
    <>
      <div className="dots">
        <span className="dot" id="red"></span>
        <span className="dot" id="yellow"></span>
        <span className="dot" id="green"></span>
      </div>
    </>
  );
}

export default TitleBar;

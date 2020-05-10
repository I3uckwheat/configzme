import React from "react";
import "../css/buttons.css";

function Button(props) {
  if (props.function && props.argument1) {
    return (
      <button 
      className={props.styles}
      onClick={() => props.function(props.argument1, props.argument2)}
    >
      {props.buttontext}
    </button>
    )
  } else if (props.function) {
    return (
      <button 
      className={props.styles}
      onClick={() => {
        props.function(props.argument)
      }}
    >
      {props.buttontext}
    </button>
    )
  } else {
    return <button className={props.styles}>{props.buttontext}</button>;
  }
}

export default Button;

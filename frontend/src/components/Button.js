import React from "react";
import "../css/buttons.css";

function Button(props) {
  if (props.function && props.argument1) {
    return (
      <button 
      className={props.styles}
      onClick={() => props.function(props.argument1, props.argument2)}
    >
      {props.children}
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
      {props.children}
    </button>
    )
  } else {
    return <button className={props.styles}>{props.children}</button>;
  }
}

export default Button;

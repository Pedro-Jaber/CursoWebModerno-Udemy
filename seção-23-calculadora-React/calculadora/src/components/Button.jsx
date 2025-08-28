import React from "react";
import "./Button.css";

export default (props) => {
  let clases = ["button"];

  clases.push(props.operation ? "operation" : "");
  clases.push(props.double ? "double" : "");
  clases.push(props.triple ? "triple" : "");

  clases.join(" ");

  return (
    <button
      onClick={(e) => props.click && props.click(props.value || props.label)}
      className={clases.join(" ")}
    >
      {props.label}
    </button>
  );
};

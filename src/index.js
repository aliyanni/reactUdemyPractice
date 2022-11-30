import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h4> This is Ali and this is my first componet.</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));

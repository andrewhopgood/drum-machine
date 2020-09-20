import React from "react";
import "../styles/Display.css";

function Display({ padName }) {
  return (
    <div id="display">
      <h1>{padName}</h1>
    </div>
  );
}

export default Display;

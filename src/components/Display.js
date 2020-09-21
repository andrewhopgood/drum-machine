import React from "react";
import "../styles/Display.css";

function Display({ padName }) {
  return (
    <div>
      <h1 id="display">{padName}</h1>
    </div>
  );
}

export default Display;

import React, { useState } from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";
import "../styles/DrumMachine.css";

export default function DrumMachine({ data }) {
  // responbility: create DrumPads and lay them with a Display layout componentnt

  const [padName, setPadName] = useState("hi");
  return (
    <div id="drum-machine">
      <DrumPad data={data} setPadName={setPadName} />
      <Display data={data} padName={padName} setPadName={setPadName} />
    </div>
  );
}

import React from "react";
import Display from "./Display";

export default function DrumMachine({ data }) {
  // responbility: create DrumPads and lay them with a Display layout componentnt
  return (
    <div id="drum-machine">
      <Display data={data} />
    </div>
  );
}

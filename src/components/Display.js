import React from "react";
import DrumPad from "./DrumPad";

export default function Display({ data }) {
  return (
    <div id="display">
      {data.map((button) => (
        <DrumPad
          padName={button.id}
          audioClipUrl={button.url}
          id={button.id}
          keyCode={button.keyCode}
        />
      ))}
    </div>
  );
}

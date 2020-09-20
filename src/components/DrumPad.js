import React from "react";
import DrumPadButton from "./DrumPadButton";
import "../styles/DrumPad.css";

export default function DrumPad({ data, setPadName }) {
  return (
    <div id="drum__pad">
      {data.map((data) => (
        <DrumPadButton data={data} key={data.id} setPadName={setPadName} />
      ))}
    </div>
  );
}

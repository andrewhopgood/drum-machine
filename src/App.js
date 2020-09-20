import React from "react";
import drum_data from "./data";
import "./styles/App.css";
import DrumMachine from "./components/DrumMachine";

function App() {
  // responsibility: Create components and objects" and wire them together.

  const data = drum_data;

  return <DrumMachine data={data}></DrumMachine>;
}

export default App;

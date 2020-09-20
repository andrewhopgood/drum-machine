import React from "react";
import drum_data from "./data";
import "./App.css";
import DrumMachine from "./components/DrumMachine";
//import Display from "./components/Display"
//import DrumPad from "./components/DrumPad"

function App() {
  // responsibility: Create components and objects" and wire them together.

  const data = drum_data;

  return <DrumMachine data={data}></DrumMachine>;
}

export default App;

/*
<button className="drum-pad" onClick={handleClick} id="q"><audio ref={soundRef} src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="Q"></audio>Q</button>
        <button className="drum-pad" onClick={handleClick} id="w"><audio ref={soundRef2} src={data.bank1.w} className="clip" id="W"></audio>W</button>
        <button className="drum-pad" onClick={handleClick} id="e"><audio src={data.bank1.e} className="clip" id="E"></audio>E</button>
        <button className="drum-pad" onClick={handleClick} id="a"><audio src={data.bank1.a} className="clip" id="A"></audio>A</button>
        <button className="drum-pad" onClick={handleClick} id="s"><audio src={data.bank1.s} className="clip" id="S"></audio>S</button>
        <button className="drum-pad" onClick={handleClick} id="d"><audio src={data.bank1.d} className="clip" id="D"></audio>D</button>
        <button className="drum-pad" onClick={handleClick} id="z"><audio src={data.bank1.z} className="clip" id="Z"></audio>Z</button>
        <button className="drum-pad" onClick={handleClick} id="x"><audio src={data.bank1.x} className="clip" id="X"></audio>X</button>
        <button className="drum-pad" onClick={handleClick} id="c"><audio src={data.bank1.c} className="clip" id="C"></audio>C</button>
     */

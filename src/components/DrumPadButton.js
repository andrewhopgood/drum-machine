import React, { useRef, useEffect } from "react";
import "../styles/DrumPadButton.css";

export default function DrumPadButton({ data, setPadName }) {
  const soundRef = useRef(null);

  const play = () => {
    soundRef.current.play();
  };

  const load = () => {
    soundRef.current.load();
  };

  const handleClick = (e) => {
    setPadName(data.audioClipName);
    play();
  };

  const handleKeyPressed = (e) => {
    if (e.keyCode === data.keyCode) {
      play();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);
    return () => {
      window.removeEventListener("keydown", handleKeyPressed);
    };
  });

  return (
    <>
      <button
        onClick={handleClick}
        onKeyDown={handleKeyPressed}
        className="drum-pad"
        id={data.id}
      >
        <audio
          ref={soundRef}
          src={data.audioClipUrl}
          className="clip"
          id={data.id}
        ></audio>
        {data.padName}
      </button>
    </>
  );
}

import React, { useRef, useEffect } from "react";

export default function DrumPad({ padName, audioClipUrl, id, keyCode }) {
  const soundRef = useRef(null);

  const play = () => {
    soundRef.current.play();
  };

  const handleClick = (e) => {
    play();
  };

  const handleKeyPressed = (e) => {
    // console.log(e.keyCode);
    // console.log(`${keyCode}: ${e.keyCode == keyCode}`);
    if (e.keyCode == keyCode) {
      play();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);
    return () => {
      window.removeEventListener("keydown", handleKeyPressed);
    };
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        onKeyDown={handleKeyPressed}
        className="drum-pad"
        id={id}
      >
        <audio
          ref={soundRef}
          src={audioClipUrl}
          className="clip"
          id={id}
        ></audio>
        {padName}
      </button>
    </>
  );
}

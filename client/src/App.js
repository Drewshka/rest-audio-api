import React, { useState } from "react";
import HowlerJs from "./components/Howler";
import axios from "axios";
import audio1 from "./audio/order.mp3";
import audio2 from "./audio/into-the-night.mp3";
import audio3 from "./audio/the-cradle-of-your-soul.mp3";
import WaveSurfer from "./components/WaveSurfer";
import "./App.css";

// const apiURL = "http://localhost:8080";
// const audioURL = `${apiURL}/api/audio`;

function App() {
  let trackList = [audio1, audio2, audio3];

  return (
    <div className="App">
      {/* <header className="App-header">Audio API</header> */}

      <HowlerJs />
      {trackList.map((track, idx) => (
        <WaveSurfer audio={track} index={idx} key={idx} />
      ))}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import HowlerJs from "./components/Howler";
import axios from "axios";
// import audio1 from "./audio/order.mp3";
// import audio2 from "./audio/into-the-night.mp3";
// import audio3 from "./audio/the-cradle-of-your-soul.mp3";
import WaveSurfer from "./components/WaveSurfer";
import "./App.css";

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function App() {
  const [audioFiles, setAudioFiles] = useState([]);
  // let trackList = [audio1, audio2, audio3];
  const audioUrls = audioFiles.map((song) => song.audioSrc);
  console.log(audioUrls);
  // var joinedString = "[" + audioUrls.join(", ") + "]";
  // console.log(joinedString);

  // console.log(audio1);

  // let trackList = [audioUrls];

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(audioURL);
      setAudioFiles(results.data);
    }
    getResults();
  }, []);
  console.log(audioFiles);

  return (
    <div className="App">
      {/* <header className="App-header">Audio API</header> */}

      <HowlerJs />
      {/* {trackList.map((track, idx) => (
        <WaveSurfer audio={track} index={idx} key={idx} />
      ))} */}
      {audioUrls.map((track, idx) => (
        <WaveSurfer audio={track} index={idx} key={idx} />
      ))}
      {/* {audioFiles.map((track, idx) => (
        <WaveSurfer audio={track} index={idx} key={idx} />
      ))} */}
    </div>
  );
}

export default App;

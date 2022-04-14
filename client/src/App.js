import React, { useState, useEffect } from "react";
// import HowlerJs from "./components/Howler";
import axios from "axios";
// import WaveSurfer from "./components/WaveSurfer";
// import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { createTheme } from "@material-ui/core/styles";
const muiTheme = createTheme({});

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function App() {
  const [audioFiles, setAudioFiles] = useState([]);

  // const audioUrls = audioFiles.map((song) => song.audioSrc);
  // console.log(audioUrls);

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
      {/* <header className="App">Audio API</header> */}
      {/* {audioUrls.map((track, idx) => (
        <WaveSurfer audio={track} index={idx} key={idx} />
      ))} */}

      {audioFiles.map((item, index) => (
        <ThemeProvider theme={muiTheme} key={index}>
          <h4>
            {item.title} - {item.artist}
          </h4>
          <AudioPlayer
            // index={index}
            // key={index}
            elevation={1}
            width="100%"
            variation="default"
            spacing={3}
            // download={true}
            // autoplay={true}
            order="standart"
            preload="auto"
            loop={true}
            src={item.audioSrc}
          />
        </ThemeProvider>
      ))}
    </div>
  );
}

export default App;

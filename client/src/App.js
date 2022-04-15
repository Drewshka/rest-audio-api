import React, { useState, useEffect } from "react";
import DisplayAudio from "./components/DisplayAudio";
import axios from "axios";
import AudioContextProvider from "./contexts/AudioContext";
// import EditAudioFile from "./components/EditAudioFile";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ThemeProvider } from "@material-ui/core";
// import AudioPlayer from "material-ui-audio-player";
// import { createTheme } from "@material-ui/core/styles";
// const muiTheme = createTheme({});

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function App() {
  const [audioFiles, setAudioFiles] = useState([]);

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
      <AudioContextProvider>
        <DisplayAudio />
      </AudioContextProvider>
      {/* <EditAudioFile /> */}
      {/* <Router>
        <Switch>
          <Route path="/" exact component={DisplayAudio} />
          <Route path="/:id" component={DisplayAudio} />
        </Switch>
      </Router> */}
      {/* {audioFiles.map((item, index) => (
        <ThemeProvider theme={muiTheme} key={index}>
          <h4>
            {item.id} - {item.title} - {item.artist}
          </h4>
          <AudioPlayer
            // index={index}
            // key={index}
            // download={true}
            // autoplay={true}
            elevation={1}
            width="100%"
            variation="default"
            spacing={3}
            order="standart"
            preload="auto"
            loop={true}
            src={item.audioSrc}
          />
        </ThemeProvider>
      ))} */}
    </div>
  );
}

export default App;

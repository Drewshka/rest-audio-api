import React, { useState, useEffect } from "react";
import axios from "axios";
// import WaveSurfer from "./components/WaveSurfer";
import "./App.css";
import DisplayAudio from "./components/DisplayAudio";
// import AudioContextProvider from "./contexts/AudioContext";
// import EditAudioFile from "./components/EditAudioFile";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      {/* {audioFiles.map((item, index) => (
        <div key={index}>
          <h1>Hey, click on the button to open the modal.</h1>

          <h4>
            {item.id} - {item.title} - {item.artist}
          </h4>
          <WaveSurfer audio={item.audioSrc} index={index} key={item.id} />
        </div>
      ))} */}
      {/* <AudioContextProvider> */}
      <DisplayAudio />
      {/* </AudioContextProvider> */}
      {/* <EditAudioFile /> */}
      {/* <Router>
        <Switch>
          <Route path="/" exact component={DisplayAudio} />
          <Route path="/:id" component={DisplayAudio} />
          <Route path="/audio/:id/edit" component={DisplayAudio} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

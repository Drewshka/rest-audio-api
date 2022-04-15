import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { createTheme } from "@material-ui/core/styles";
import EditModal from "./EditModal";

const muiTheme = createTheme({});

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function DisplayAudio(props) {
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
    <div className="DisplayAudio">
      {audioFiles.map((item, index) => (
        <ThemeProvider theme={muiTheme} key={index}>
          <h1>Track {item.id}</h1>
          <div>
            {/* <Modal song={item} /> */}
            <EditModal song={item} />
            <h4>
              Title: <span style={{ color: "blue" }}>{item.title}</span> -
              Artist: <span style={{ color: "blue" }}>{item.artist}</span>
            </h4>
          </div>

          <AudioPlayer
            // download={true}
            elevation={20}
            width="100%"
            variation="default"
            spacing={3}
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

export default DisplayAudio;

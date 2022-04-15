import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { Modal, Button, Alert } from "react-bootstrap";
import { createTheme } from "@material-ui/core/styles";
import Song from "./Song";
// import AudioContext from "../contexts/AudioContext";

const muiTheme = createTheme({});

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function DisplayAudio(props) {
  const [audioFiles, setAudioFiles] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // const { sortededSongs } = useContext(AudioContext);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [audioFiles]);

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
      <Alert show={showAlert} variant="success">
        Audio List Updated Succefully!
      </Alert>
      {audioFiles.map((item, index) => (
        <ThemeProvider theme={muiTheme} key={index}>
          <div key={item.id}>
            <Song song={item} key={index} />
          </div>
          {/* <Song song={item} key={index} /> */}
          {/* <h4>
            {item.id} - {item.title} - {item.artist}
          </h4> */}
          {/* <AudioPlayer
            // index={index}
            // key={index}
            // autoplay={true}
            // download={true}
            elevation={20}
            width="100%"
            variation="default"
            spacing={3}
            order="standart"
            preload="auto"
            loop={true}
            src={item.audioSrc}
          /> */}
        </ThemeProvider>
      ))}
    </div>
  );
}

export default DisplayAudio;

// useEffect(() => {
//   async function handleSubmit(event, id) {
//     const newResults = await axios.put(audioURL / `${id}`, {
//       title: event.target.title.value,
//       artist: event.target.artist.value,
//     });
//     setAudioFiles(newResults.data);
//     window.location.reload();
//   }
//   handleSubmit();
// }, []);

// const updateListArray = (obj, index) => {
//   let tempAudios = audioFiles;
//   tempAudios[index] = obj;
//   localStorage.setItem("taskList", JSON.stringify(tempAudios));

//   setAudioFiles(tempAudios);
//   window.location.reload();
// };

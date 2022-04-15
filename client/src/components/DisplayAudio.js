import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
// import { Modal, Button, Alert } from "react-bootstrap";
import { createTheme } from "@material-ui/core/styles";
import Modal from "./Modal";
// import Update from "./Update";
// import editIcon from "../assets/editIcon.svg";
// import Song from "./Song";
// import AudioContext from "../contexts/AudioContext";

const muiTheme = createTheme({});

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

function DisplayAudio(props) {
  const [audioFiles, setAudioFiles] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  // const { sortededSongs } = useContext(AudioContext);

  // const handleShowAlert = () => {
  //   setShowAlert(true);
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 2000);
  // };

  // useEffect(() => {
  //   handleClose();

  //   return () => {
  //     handleShowAlert();
  //   };
  // }, [audioFiles]);

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(audioURL);
      setAudioFiles(results.data);
    }
    getResults();
  }, []);
  console.log(audioFiles);

  // const Update = (id) => {
  //   console.log(id);
  //   // props.history.push("/Update/" + id);
  //   // window.location.reload(false);
  // };

  return (
    <div className="DisplayAudio">
      {audioFiles.map((item, index) => (
        <ThemeProvider theme={muiTheme} key={index}>
          <h1>Open</h1>
          <div>
            <Modal song={item} />
            <h4>
              {item.id} - {item.title} - {item.artist}
            </h4>
          </div>
          {/* <div key={item.id}>
            <Song song={item} key={index} />
          </div> */}
          {/* <Link
            to={`/${item.id}`}
            className="audio-list__item-link"
            key={item.id}>
            <img
              src={editIcon}
              alt="edit icon"
              className="audio-list__table-data-icons--edit"
            />
          </Link> */}

          {/* <button onClick={() => Update(item.id)}>Update</button> */}

          <AudioPlayer
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
          />
        </ThemeProvider>
      ))}
    </div>
  );
}

export default DisplayAudio;

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AudioContext = createContext();

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

const AudioContextProvider = (props) => {
  const [audioFiles, setAudioFiles] = useState([]);
  // const [audioFiles, setAudioFiles] = useState([
  //   { id: 1, title: "Into the night", artist: "prazkhanal" },
  //   { id: 2, title: "Order", artist: "ComaStudio" },
  //   { id: 3, title: "The cradle of your soul", artist: "Lemon Music Studio" },
  // ]);

  useEffect(() => {
    setAudioFiles(JSON.parse(localStorage.getItem("songs")));
  }, []);

  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(audioFiles));
  });

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(audioURL);
      setAudioFiles(results.data);
    }
    getResults();
  }, []);
  console.log(audioFiles);

  const updateSong = (id, updatedSong) => {
    // axios.put(`${audioURL}/${id}`).then(() => {
    //   // setAudioFiles(response.data);
    //   setAudioFiles(
    //     audioFiles.map((song) => (song.id === id ? updatedSong : song))
    //   );
    // });
    setAudioFiles(
      audioFiles.map((song) => (song.id === id ? updatedSong : song))
    );
  };

  return (
    <AudioContext.Provider value={{ updateSong }}>
      {props.children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;

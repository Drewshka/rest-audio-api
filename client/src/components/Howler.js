// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Howl, Howler } from "howler";
// import audio1 from "../audio/order.mp3";
// import audio2 from "../audio/into-the-night.mp3";

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

const HowlerJs = (props) => {
  //   const [audioFiles, setAudioFiles] = useState([]);

  //   useEffect(() => {
  //     async function getResults() {
  //       const results = await axios.get(audioURL, {
  //         responseType: "blob",
  //       });
  //       setAudioFiles(results.data);
  //     }
  //     getResults();
  //   }, []);
  //   console.log(audioFiles);

  //   useEffect(() => {
  //     axios
  //       .get(audioURL)
  //       .then(async function (response) {
  //         response.data.map(async (song) => {
  //           try {
  //             // const gigAddress = gig.address;
  //             const songUrl = song.audioSrc;
  //             console.log(songUrl);
  //           } catch (error) {
  //             console.log("Error", error);
  //           }
  //         });
  //         setAudioFiles(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, []);
  //   console.log(audioFiles);

  //   const playAudio = async (id) => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8080/api/audio/${id}`,
  //         {
  //           responseType: "blob",
  //         }
  //       );
  //       const mp3 = new Blob([response.data], { type: "audio/mp3" });
  //       const url = window.URL.createObjectURL(mp3);
  //       const audio = new Audio(url);
  //       audio.load();
  //       await audio.play();
  //     } catch (e) {
  //       console.log("play audio error: ", e);
  //     }
  //   };

  //   const audioUrls = audioFiles.map((song) => song.audioSrc);

  //   const sound = new Howl({
  //     sprite: {
  //       src: [audio1, audio2],
  //       //   src: [audioUrls],
  //     },
  //   });

  return (
    <div className="App">
      {/* <button onClick={() => sound.play()}>Play</button> */}
      {/* <ul>
        {audioFiles.map((item, id) => (
          <li key={id} onClick={() => playAudio(item.id)}>
            {item.title}
          </li>
        ))}
      </ul> */}
      {/* {audioFiles.map((song, i) => {
        return (
          <div className="songList" key={i}>
            <ul>
              <li>{song.title}</li>
              <li>{song.artist}</li>
              <li>{song.audioSrc}</li>
            </ul>
          </div>
        );
      })} */}
    </div>
  );
};

export default HowlerJs;

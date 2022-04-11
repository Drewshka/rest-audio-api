import React, { useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const Wavesurfer = ({ audio, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveform, setWaveform] = useState(null);
  useEffect(() => {
    const track = document.querySelector(`#track-${index}`);

    let wavesurfer = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#2D5BFF",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
    });
    wavesurfer.load(track);
    setWaveform(wavesurfer);
  }, [setWaveform, index]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    !isPlaying && waveform.play();
    isPlaying && waveform.pause();
  };

  return (
    <div className="waveContainer">
      {!isPlaying && (
        <button onClick={() => handlePlay()} className="playButton">
          Play
        </button>
      )}
      {isPlaying && (
        <button onClick={() => handlePlay()} className="playButton">
          Pause
        </button>
      )}
      <div id="waveform" />
      <audio id={`track-${index}`} src={audio} />
    </div>
  );
};

export default Wavesurfer;

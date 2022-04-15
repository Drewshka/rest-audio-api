const Audio = require("../models/audioModel");

exports.listAudio = async (req, res) => {
  const result = await Audio.listAudio();
  res.json(result);
};

exports.getAudioFile = async (req, res, next) => {
  const audioFile = await Audio.getOneById(req.params.id);
  if (!audioFile) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(audioFile);
  }
};

exports.editAudioFile = async (req, res, next) => {
  console.log("req.body", req.body);
  if (!req.body.title && !req.body.artist && !req.body.audioSrc) {
    const err = new Error(
      "PUT request requires title, artist and audio source"
    );
    err.status = 400;
    next(err);
  } else {
    const updatedArray = await Audio.update(req.params.id, req.body);
    if (!updatedArray) {
      const err = new Error("Please provide a valid id.");
      err.status = 400;
      next(err);
    } else {
      res.json(Audio.update(req.params.id, req.body));
    }
  }
};

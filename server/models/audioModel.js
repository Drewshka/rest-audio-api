// const database = require("../knexfile");
// const knex = require("knex")(database);
const NodeID3 = require("node-id3");

const knex = require("knex")(require("../knexfile").development);

const listAudio = async () => {
  try {
    const data = await knex.select("*").from("audioFiles");
    const results = data.map((song) => {
      const options = {
        noRaw: true, // don't generate raw object (default: false)
      };
      const tags = NodeID3.read(`./audioFiles/${song.audioSrc}`, options);
      console.log(tags);
      tags.audioSrc = song.audioSrc;
      tags.id = song.id;
      tags.title = song.title;
      // tags.artist = song.artist;
      console.log(tags);
      return tags;
    });
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getOneById = async (id) => {
  try {
    const data = await knex.select("*").where("id", id).from("audioFiles");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async (id, data) => {
  console.log("data parameter", data);
  try {
    const result = await knex("audioFiles").where("id", id).update(data);
    const success = NodeID3.update(tags, filepath);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  listAudio,
  getOneById,
  update,
};

// const fs = require("fs"),
//   path = require("path"),
//   audioFile = path.join(__dirname, "../data/audio.json");
//   uniqid = require("uniqid");

// class Audio {
//   constructor(title, artist, audioSrc) {
//     this.id = uniqid();
//     this.title = title;
//     this.artist = artist;
//     this.audioSrc = audioSrc;
//   }
// }

// let audioData = [];

// const listAudio = () => {
//   const data = fs.readFileSync(audioFile);
//   audioData = JSON.parse(data);
//   return audioData;
// };

// const getOneById = (id) => {
//   const audioArray = listAudio();
//   const audioFile = audioArray.find((audioFile) => audioFile.id === id);
//   return audioFile;
// };

// const update = (id, data) => {
//   console.log("data parameter", data);
//   const audioArray = listAudio();
//   const audioIndex = audioArray.findIndex((audioFile) => audioFile.id === id);

//   if (audioIndex !== -1) {
//     audioArray.splice(audioIndex, 1, {
//       id: id,
//       ...data,
//     });
//     fs.writeFileSync(audioFile, JSON.stringify(audioArray));
//     return audioArray;
//   }
// };

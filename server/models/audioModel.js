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
      tags.artist = song.artist;
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
    const audioResult = await knex
      .select("*")
      .where("id", id)
      .from("audioFiles");
    console.log("result", result);
    console.log("audioSrc", audioResult[0].audioSrc);
    const success = NodeID3.update(
      data,
      `./audioFiles/${audioResult[0].audioSrc}`
    );
    console.log(success);
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

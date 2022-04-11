/**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const audioFiles = [
    {
      id: "1",
      title: "Into the night",
      artist: "prazkhanal",
      audioSrc: "../audioFiles/into-the-night.mp3",
    },
    {
      id: "2",
      title: "Order",
      artist: "ComaStudio",
      audioSrc: "../audioFiles/order.mp3",
    },
    {
      id: "3",
      title: "The cradle of your soul",
      artist: "Lemon Music Studio",
      audioSrc: "../audioFiles/the-cradle-of-your-soul.mp3",
    },
  ];
  return knex("audioFiles")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("audioFiles").insert(audioFiles);
    });
};

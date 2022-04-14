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
      audioSrc: "into-the-night.mp3",
    },
    {
      id: "2",
      title: "Order",
      artist: "ComaStudio",
      audioSrc: "order.mp3",
    },
    {
      id: "3",
      title: "The cradle of your soul",
      artist: "Lemon Music Studio",
      audioSrc: "the-cradle-of-your-soul.mp3",
    },
  ];
  // const audioFiles = [
  //   {
  //     id: "1",
  //     title: "Into the night",
  //     artist: "prazkhanal",
  //     audioSrc: "songs/into-the-night.mp3",
  //   },
  //   {
  //     id: "2",
  //     title: "Order",
  //     artist: "ComaStudio",
  //     audioSrc: "songs/order.mp3",
  //   },
  //   {
  //     id: "3",
  //     title: "The cradle of your soul",
  //     artist: "Lemon Music Studio",
  //     audioSrc: "songs/the-cradle-of-your-soul.mp3",
  //   },
  // ];

  // const audioFiles = [
  //   {
  //     id: "1",
  //     title: "Into the night",
  //     artist: "prazkhanal",
  //     audioSrc: "/audio/into-the-night.mp3",
  //   },
  //   {
  //     id: "2",
  //     title: "Order",
  //     artist: "ComaStudio",
  //     audioSrc: "/audio/order.mp3",
  //   },
  //   {
  //     id: "3",
  //     title: "The cradle of your soul",
  //     artist: "Lemon Music Studio",
  //     audioSrc: "/audio/the-cradle-of-your-soul.mp3",
  //   },
  // ];
  return knex("audioFiles")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("audioFiles").insert(audioFiles);
    });
};

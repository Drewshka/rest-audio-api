// Update with your config settings.

/**
 * @type { Knex }
 */
module.exports = {
  // client: "mysql",
  development: {
    client: "mysql",
    connection: {
      // filename: "./dev.sqlite3",
      port: "3306",
      user: "root",
      password: "rootroot",
      database: "audio",
      host: "127.0.0.1",
      charset: "utf8",
    },
  },
};

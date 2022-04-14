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
      // host: "localhost",
      charset: "utf8",
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: "mysql",
  //   connection: {
  //     database: "audio",
  //     user: "root",
  //     password: "rootroot",
  //   },
  //   // pool: {
  //   //   min: 2,
  //   //   max: 10,
  //   // },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};

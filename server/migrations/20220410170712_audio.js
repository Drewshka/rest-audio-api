/**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("audioFiles", function (table) {
    table.increments("id");
    table.string("title").notNullable();
    table.string("artist").notNullable();
    table.string("audioSrc").notNullable();
  });
};

/**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }au
 */
exports.down = function (knex) {
  return knex.schema.dropTable("audioFiles");
};

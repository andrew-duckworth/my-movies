// const { idText } = require('typescript')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('method')
    table.string('image')
    table.integer('ingredients_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('recipes')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('decks', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('img_attribution')
    table.string('format').defaultTo('commander')
    table
      .enum('state', ['theoretical', 'building', 'built', 'retired'])
      .defaultTo('built')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('decks')
}

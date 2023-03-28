/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('scheduler', (table) => {
    table.increments('id').primary()
    table.integer('show_id')
    table.string('host')
    table.string('day')
    table.string('time')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('scheduler')
}

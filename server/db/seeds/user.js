/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    { id: 1, username: 'Shadae' },
    { id: 2, username: 'Hollie' },
    { id: 3, username: 'Jayden' },
  ])
}

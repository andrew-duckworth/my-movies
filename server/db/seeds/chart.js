/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('chart').del()
  await knex('chart').insert([
    { id: 301, planet_id: 101, sign_id: 207 },
    { id: 302, planet_id: 102, sign_id: 203 },
    { id: 303, planet_id: 103, sign_id: 201 },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('chart').del()
  await knex('chart').insert([
    { id: 301, user_id: 1, planet_id: 101, sign_id: 207 },
    { id: 302, user_id: 1, planet_id: 102, sign_id: 203 },
    { id: 303, user_id: 1, planet_id: 103, sign_id: 201 },
  ])
}

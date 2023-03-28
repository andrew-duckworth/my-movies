/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('hikes').insert([
    { id: 1, name: 'Lake Lucidus', location: '44.383 S, 168.717 E' },
    { id: 2, name: 'Mt Twilight', location: '-44.29802760, 168.89282950' },
    { id: 3, name: 'Top Forks Hut', location: '44.2745 S, 168.8909 E' },
  ])
}

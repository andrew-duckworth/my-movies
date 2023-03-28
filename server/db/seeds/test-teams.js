/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('teams').del()
  await knex('teams').insert([
    {
      name: 'Manchester United',
      manager: 'Eric ten Hag',
      city: 'Manchester',
      logo: 'https://i.imgur.com/EsVXqtu.png',
    },
    {
      name: 'Manchester City',
      manager: 'Pep Guardiola',
      city: 'Manchester',
      logo: 'https://i.imgur.com/fMbumn3.png',
    },
  ])
}

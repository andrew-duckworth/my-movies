/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('musicFestivals').del()
  await knex('musicFestivals').insert([
    { id: 1, name: 'Rampage', country: 'Belgium', date: '30 June' },
    { id: 3, name: 'Tomorrowland', country: 'Belgium', date: '21 July' },
    { id: 4, name: 'Let It Roll', country: 'Prague', date: '03 August' },
    {
      id: 5,
      name: 'Hospitality on the Beach',
      country: 'Croatia',
      date: '04 July',
    },
    { id: 6, name: 'Shambhala', country: 'Canada', date: '21 July' },
  ])
}

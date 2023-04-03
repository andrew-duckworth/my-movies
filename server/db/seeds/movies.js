/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      title: 'Inception',
      image: 'https://i.imgur.com/kfOMBcu.gifv',
      rating: 8,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      image: 'https://i.imgur.com/kfOMBcu.gifv',
      rating: 10,
    },
  ])
}

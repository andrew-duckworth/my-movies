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
      imdb_id: 'tt0120338',
      title: 'Inception',
      image: 'https://picsum.photos/500/750',
      rating: 5,
    },
    {
      id: 2,
      imdb_id: 'tt0120338',
      title: 'Home Alone',
      image: 'https://picsum.photos/500/700',
      rating: 5,
    },
    {
      id: 3,
      imdb_id: 'tt0120338',
      title: 'Bat Man',
      image: 'https://picsum.photos/500/725',
      rating: 5,
    },
  ])
}

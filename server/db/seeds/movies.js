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
      title: 'Titanic',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6757_AL_.jpg',
      rating: 13,
    },
    {
      id: 2,
      imdb_id: 'tt1606389',
      title: 'The Vow',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_Ratio0.6757_AL_.jpg',
      rating: 9,
    },
  ])
}

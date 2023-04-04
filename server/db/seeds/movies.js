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
      imdbId: 'tt0312528',
      title: 'Cat in the Hat',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_Ratio0.6757_AL_.jpg',
      rating: 8,
    },
    {
      id: 2,
      imdbId: 'tt1482459',
      title: 'The Lorax',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTU1MTAwMjk1NF5BMl5BanBnXkFtZTcwMDI5NDc4Ng@@._V1_Ratio0.6757_AL_.jpg',
      rating: 10,
    },
  ])
}

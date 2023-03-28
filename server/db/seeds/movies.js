exports.seed = (knex) =>
  knex('movies')
    .del()
    .then(() =>
      knex('movies').insert([
        {
          id: 1,
          title: 'Interstellar',
          director: 'Christopher Nolan',
          movieImg:
            'https://i.etsystatic.com/17257718/r/il/56c8b9/3193945128/il_1588xN.3193945128_c0vd.jpg',
        },
        {
          id: 2,
          title: 'The Batman',
          director: 'Matt Reeves',
          movieImg:
            'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
        },
        {
          id: 3,
          title: 'The Northman',
          director: 'Robert Eggers',
          movieImg:
            'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
        },
      ])
    )

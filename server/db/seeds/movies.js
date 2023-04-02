exports.seed = (knex) =>
  knex('movies')
    .del()
    .then(() =>
      knex('movies').insert([
        {
          id: 1,
          title: 'Dune',
          director: 'Denis Villeneuve',
          cover: './images/Dune.jpeg',
        },
        {
          id: 2,
          title: 'Triangle of Sadness',
          director: 'Ruben Östlund',
          cover: './images/Triangle.jpg',
        },
        {
          id: 3,
          title: 'The Lighthouse',
          director: 'Robert Eggers',
          cover: './images/Light.jpg',
        },
        {
          id: 4,
          title: 'The Northman',
          director: 'Robert Eggers',
          cover: './images/North.jpg',
        },
        {
          id: 5,
          title: 'Brazil',
          director: 'Terry Gilliam',
          cover: './images/Brazil.jpg',
        },
      ])
    )

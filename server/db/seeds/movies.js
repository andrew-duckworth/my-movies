exports.seed = (knex) =>
  knex('movies')
    .del()
    .then(() =>
      knex('movies').insert([
        { id: 1, title: 'Dune', director: 'Denis Villeneuve' },
        { id: 2, title: 'Triangle of sadness', director: 'Ruben Östlund' },
        { id: 3, title: 'The Lighthouse', director: 'Robert Eggers' },
        { id: 4, title: 'The Northman', director: 'Robert Eggers' },
        { id: 5, title: 'Brazil', director: 'Terry Gilliam' },
      ])
    )

exports.seed = (knex) =>
  knex('ingredients')
    .del()
    .then(() =>
      knex('ingredients').insert([
        {
          id: 201,
          list: JSON.stringify([
            {
              quantity: '150 g',
              ingredient: 'dried spaghetti',
            },
            {
              quantity: '4 cloves of',
              ingredient: 'garlic',
            },
            {
              quantity: '200 g',
              ingredient: 'cavolo nero',
            },
            {
              quantity: '30 g',
              ingredient: 'parmesan cheese',
            },
            {
              quantity: '30 g',
              ingredient: 'ricotta cheese',
            },
          ]),
        },
        {
          id: 202,
          list: JSON.stringify([
            {
              quantity: '350 g',
              ingredient: 'mixed-colour baby heritage carrots',
            },
            {
              quantity: '1',
              ingredient: 'pomegranate',
            },
            {
              quantity: '60 g',
              ingredient: 'fresh mint',
            },
            {
              quantity: '1 x 250g packet of',
              ingredient: 'mixed cooked grains',
            },
            {
              quantity: '40 g',
              ingredient: 'feta cheese',
            },
          ]),
        },
      ])
    )

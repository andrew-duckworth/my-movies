exports.seed = (knex) =>
  knex('recipes')
    .del()
    .then(() =>
      knex('recipes').insert([
        {
          id: 101,
          title: 'Super Green Spaghetti',
          method:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar semper tellus id fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis.',
          image:
            'https://img.jamieoliver.com/jamieoliver/recipe-database/55846383.jpg?tr=w-800,h-1066',
          ingredients_id: 201,
        },
        {
          id: 102,
          title: 'Carrot & Grain Salad',
          method:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar semper tellus id fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis.',
          image:
            'https://img.delicious.com.au/-wBbiQHb/w759-h506-cfill/del/2018/04/carrot-and-grain-salad-77039-2.jpg',
          ingredients_id: 202,
        },
      ])
    )

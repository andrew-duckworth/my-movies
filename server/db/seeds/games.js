exports.seed = (knex) => {
  return knex('games').insert([
    {
      id: 1,
      title: 'God Of War',
      dev: 'Santa Monica Studio',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg',
    },
    {
      id: 2,
      title: 'The Witcher 3',
      dev: 'CD Projekt Red',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    },
    {
      id: 3,
      title: 'Skyrim',
      dev: 'Bathesda Game Studios',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    },
  ])
}

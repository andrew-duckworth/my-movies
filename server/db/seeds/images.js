exports.seed = (knex) => {
  return knex('Albums').insert([
    {
      id: 1,
      name: 'Taylor Swift',
      year: 2006,
      image: '/photos/image_1.png',
    },

    {
      id: 2,
      name: 'Fearless',
      year: 2008,
      image: '/photos/image_2.png',
    },

    {
      id: 3,
      name: 'Speak Now',
      year: 2010,
      image: '/photos/image_3.png',
    },

    {
      id: 4,
      name: 'Red',
      year: 2012,
      image: '/photos/image_4.png',
    },

    {
      id: 5,
      name: '1989',
      year: 2014,
      image: '/photos/image_5.png',
    },

    {
      id: 6,
      name: 'Reputation',
      year: 2017,
      image: '/photos/image_6.png',
    },

    {
      id: 7,
      name: 'Lover',
      year: 2019,
      image: '/photos/image_7.png',
    },

    {
      id: 8,
      name: 'Folklore',
      year: 2020,
      image: '/photos/image_8.png',
    },

    {
      id: 9,
      name: 'Evermore',
      year: 2020,
      image: '/photos/image_9.png',
    },

    {
      id: 10,
      name: 'Midnights',
      year: 2022,
      image: '/photos/image_10.png',
    },
  ])
}

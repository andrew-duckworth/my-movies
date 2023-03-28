/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('starsigns').del()
  await knex('starsigns').insert([
    { id: 1, sign: 'Aries', dates: '21/3 - 19/4', image: 'aries.jpeg' },
    { id: 2, sign: 'Taurus', dates: '20/4 - 20/5', image: 'taurus.jpeg' },
    { id: 3, sign: 'Gemini', dates: '21/5 - 21/6', image: 'gemini.jpeg' },
    { id: 4, sign: 'Cancer', dates: '22/6 - 22/7', image: 'cancer.jpeg' },
    { id: 5, sign: 'Leo', dates: '23/7 - 22/8', image: 'leo.jpeg' },
    { id: 6, sign: 'Virgo', dates: '23/8 - 22/9', image: 'virgo.jpeg' },
    { id: 7, sign: 'Libra', dates: '23/9 - 23/10', image: 'libra.jpeg' },
    { id: 8, sign: 'Scorpio', dates: '24/10 - 21/11', image: 'scorpio.jpeg' },
    {
      id: 9,
      sign: 'Sagittarius',
      dates: '22/11 - 21/12',
      image: 'sagittarius.jpeg',
    },
    {
      id: 10,
      sign: 'Capricorn',
      dates: '22/12 - 19/1',
      image: 'capricorn.jpeg',
    },
    { id: 11, sign: 'Aquarius', dates: '20/1 - 18/2', image: 'aquarius.jpeg' },
    { id: 12, sign: 'Pisces', dates: '19/2 - 20/3', image: 'pisces.jpeg' },
  ])
}

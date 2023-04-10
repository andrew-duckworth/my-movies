/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('starsigns').del()
  await knex('starsigns').insert([
    {
      id: 201,
      name: 'Aries',
      dates: '21/3 - 19/4',
      image: 'aries.jpeg',
      adverb: 'assertive, competitive, independent',
    },
    {
      id: 202,
      name: 'Taurus',
      dates: '20/4 - 20/5',
      image: 'taurus.jpeg',
      adverb: 'practical, stubborn, sensual, reliable',
    },
    {
      id: 203,
      name: 'Gemini',
      dates: '21/5 - 21/6',
      image: 'gemini.jpeg',
      adverb: 'curious, chaotic, witty',
    },
    {
      id: 204,
      name: 'Cancer',
      dates: '22/6 - 22/7',
      image: 'cancer.jpeg',
      adverb: 'sensitive, nurturing, gentle',
    },
    {
      id: 205,
      name: 'Leo',
      dates: '23/7 - 22/8',
      image: 'leo.jpeg',
      adverb: 'bold, proud, attention-loving, charming',
    },
    {
      id: 206,
      name: 'Virgo',
      dates: '23/8 - 22/9',
      image: 'virgo.jpeg',
      adverb: 'responsible, meticulous, wholesome',
    },
    {
      id: 207,
      name: 'Libra',
      dates: '23/9 - 23/10',
      image: 'libra.jpeg',
      adverb: 'fair, just, relativist',
    },
    {
      id: 208,
      name: 'Scorpio',
      dates: '24/10 - 21/11',
      image: 'scorpio.jpeg',
      adverb: 'intense, deep, power-hungry',
    },
    {
      id: 209,
      name: 'Sagittarius',
      dates: '22/11 - 21/12',
      image: 'sagittarius.jpeg',
      adverb: 'restless, intellectual',
    },
    {
      id: 210,
      name: 'Capricorn',
      dates: '22/12 - 19/1',
      image: 'capricorn.jpeg',
      adverb: 'responsible, serious, efficient, rational',
    },
    {
      id: 211,
      name: 'Aquarius',
      dates: '20/1 - 18/2',
      image: 'aquarius.jpeg',
      adverb: 'unconventional, anti, boundary-pushing',
    },
    {
      id: 212,
      name: 'Pisces',
      dates: '19/2 - 20/3',
      image: 'pisces.jpeg',
      adverb: 'insightful, intuitive, empathetic',
    },
  ])
}

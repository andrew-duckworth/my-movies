/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_chart').del()
  await knex('user_chart').insert([
    { id: 1, user_id: 1, sun: 'Libra', moon: 'Gemini', rising: 'Aries' },
    {
      id: 2,
      user_id: 2,
      sun: 'Cancer',
      moon: 'Capricorn',
      rising: 'Cancer',
    },
    {
      id: 3,
      user_id: 3,
      sun: 'Capricorn',
      moon: 'Sagittarius',
      rising: 'Aquarius',
    },
  ])
}

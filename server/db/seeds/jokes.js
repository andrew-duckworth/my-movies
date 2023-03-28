/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jokes').del()
  await knex('jokes').insert([
    {
      id: 1,
      joke: 'why is rocket bad for you?',
      punchline: "because it's a fast food",
    },
    {
      id: 2,
      joke: 'the blonde and the brunette walk into a sushi shop',
      punchline: 'the ginger was already there',
    },
    {
      id: 3,
      joke: 'did you hear about that landlord beethoven?',
      punchline: 'all his shops were für elise',
    },
  ])
}

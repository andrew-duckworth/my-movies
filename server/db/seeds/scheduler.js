/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('scheduler').del()
  await knex('scheduler').insert([
    {
      id: 1,
      show_id: 1,
      host: 'Ben UFO',
      day: 'Thursday',
      time: '9:00AM',
    },
    {
      id: 2,
      show_id: 2,
      host: 'PLO Man, Hashman Deejay',
      day: 'Wednesday',
      time: '9:00PM',
    },
    {
      id: 3,
      show_id: 3,
      host: 'Power, Five and Andry',
      day: 'Tuesday',
      time: '8:00AM',
    },
    {
      id: 4,
      show_id: 4,
      host: 'Samo DJ',
      day: 'Monday',
      time: '10:00AM',
    },
  ])
}

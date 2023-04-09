/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('family').del()
  await knex('family').insert([
    {
      id: 1,
      name: 'Mariette',
      nicknames: 'Longah',
      position: 'Matriarch',
    },

    {
      id: 2,
      name: 'Quentin',
      nicknames: 'Diddles',
      position: 'Patriarch',
    },

    {
      id: 3,
      name: 'Rowena',
      nicknames: 'Tiglet',
      position: 'Eldest sister',
    },

    {
      id: 4,
      name: 'Jacques',
      nicknames: 'Buster',
      position: 'Second daughter',
    },

    {
      id: 5,
      name: 'Lou',
      nicknames: 'Chickie',
      position: 'First born son',
    },
  ])
}

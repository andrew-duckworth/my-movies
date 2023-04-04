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
      note: 'tbc',
    },

    {
      id: 2,
      name: 'Quentin',
      nicknames: 'Diddles',
      position: 'Patriarch',
      note: 'tbc',
    },

    {
      id: 3,
      name: 'Rowena',
      nicknames: 'Tiglet',
      position: 'Eldest sister',
      note: 'tbc',
    },

    {
      id: 4,
      name: 'Jacques',
      nicknames: 'Buster',
      position: 'Second daughter',
      note: 'tbc',
    },

    {
      id: 5,
      name: 'Lou',
      nicknames: 'Chickie',
      position: 'First born son',
      note: 'tbc',
    },
  ])
}

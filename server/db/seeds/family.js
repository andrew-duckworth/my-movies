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
      image: 'placeholder',
    },

    {
      id: 2,
      name: 'Quentin',
      nicknames: 'Diddles',
      position: 'Patriarch',
      image: 'placeholder',
    },

    {
      id: 3,
      name: 'Rowena',
      nicknames: 'Tiglet',
      position: 'Eldest sister',
      image: 'placeholder',
    },

    {
      id: 4,
      name: 'Jacques',
      nicknames: 'Buster',
      position: 'Second daughter',
      image: 'placeholder',
    },

    {
      id: 5,
      name: 'Lou',
      nicknames: 'Chickie',
      position: 'First born son',
      image: 'placeholder',
    },
  ])
}

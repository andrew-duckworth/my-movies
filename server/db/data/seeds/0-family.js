/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('family').del()
  await knex('family').insert([
    {
      id: 1,
      name: 'Mariette',
      nicknames: ['Longah', 'Oma'],
      position: 'Matriarch',
      image: 'placeholder',
    },

    {
      id: 2,
      name: 'Quentin',
      nicknames: ['Diddles', 'Pop'],
      position: 'Patriarch',
      image: 'placeholder',
    },

    {
      id: 3,
      name: 'Rowena',
      nicknames: ['Ro', 'Chickie'],
      position: 'Eldest sister',
      image: 'placeholder',
    },

    {
      id: 4,
      name: 'Jacques',
      nicknames: ['Shark', 'Buster'],
      position: 'Second daughter',
      image: 'placeholder',
    },

    {
      id: 5,
      name: 'Lou',
      nicknames: ['LouLou', 'Louie', 'Rusty'],
      position: 'First born son',
      image: 'placeholder',
    },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('hamsters').del()
  await knex('hamsters').insert([
    { id: 1, name: 'Getrude', image: 'images_/hamsterOne.png' },
    { id: 2, name: 'Garfunkel', image: 'images_/hamsterTwo.png' },
    { id: 3, name: 'Human Skills', image: 'images_/hamsterThree.png' },
  ])
}

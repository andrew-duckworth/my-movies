/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('hamsters').del()
  await knex('hamsters').insert([
    { id: 1, hamster_name: 'Getrude', image: 'images_/hamsterOne.png' },
    { id: 2, hamster_name: 'Garfunkel', image: 'images_/hamsterTwo' },
    { id: 3, hamster_name: 'Human Skills', image: 'images_/hamsterThree' },
  ])
}

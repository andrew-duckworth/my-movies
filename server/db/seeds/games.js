/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await await knex('games').del()
  await knex('games').insert([
    {
      name: 'The Last of Us Part I',
      released: '2022-09-02',
      image:
        'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg',
    },
    {
      name: 'Resident Evil 4',
      released: '2023-03-24',
      image:
        'https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg',
    },
  ])
}

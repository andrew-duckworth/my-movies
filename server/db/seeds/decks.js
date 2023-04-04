/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('decks').del()
  await knex('decks').insert([
    {
      id: 1,
      name: 'Esix, Fractal Bloom',
      image:
        'https://cards.scryfall.io/art_crop/front/9/c/9c381bc2-d26e-4d7e-9a0b-a8f7d2d802be.jpg?1674185833',
      img_attribution: 'Chase Stone',
      digital: false,
    },
    {
      id: 2,
      name: 'Ivy, Gleeful Spellthief',
      image:
        'https://cards.scryfall.io/art_crop/front/d/9/d94c15b7-6c8f-45a6-8734-975e3e3b790c.jpg?1673307958',
      img_attribution: 'Evyn Fong',
      digital: false,
    },
    {
      id: 3,
      name: 'Renari // Acolyte',
      image:
        'https://cards.scryfall.io/art_crop/front/1/c/1c044363-d661-4703-841c-8279fa4aa5e5.jpg?1674135745',
      img_attribution: 'Filip Burburan',
      digital: false,
    },
  ])
}

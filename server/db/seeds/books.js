/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await await knex('books').del()
  await knex('books').insert([
    {
      title: 'The Point of View of the Universe',
      publish_date: 'Jun 01, 2016',
      author_name: 'Katarzyna de Lazari-Radek, Peter Singer',
      cover_image: 'https://covers.openlibrary.org/b/isbn/0198776721-L.jpg',
    },
  ])
}

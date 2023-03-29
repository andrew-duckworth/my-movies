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
    {
      title: 'On what matters',
      publish_date: 'Mar 19, 2017',
      author_name: 'Derek Parfit',
      cover_image: 'https://covers.openlibrary.org/b/isbn/0191576719-L.jpg',
    },
    {
      title: 'The Capacity Contract',
      publish_date: 'Mar 15, 2015',
      author_name: 'Stacy Simplican',
      cover_image: 'https://covers.openlibrary.org/b/isbn/0816694036-L.jpg',
    },
    {
      title: 'Reasons and Persons',
      publish_date: 'February 20, 1986',
      author_name: 'Derek Parfit',
      cover_image:
        'https://ia800607.us.archive.org/view_archive.php?archive=/6/items/olcovers12/olcovers12-L.zip&file=129903-L.jpg',
    },
    {
      title: "China's crony capitalism",
      publish_date: '2016',
      author_name: 'Minxin Pei',
      cover_image:
        'https://covers.openlibrary.org/b/olid/OL7443143140032M-S.jpg',
    },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('manga').del()
  await knex('manga').insert([
    {
      id: 1,
      title: 'Negima',
      series_num: 1,
      author: 'Ken Akamatsu',
      location: 'Spare Bedroom',
      image_src:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/519VXD2BR7L._SX315_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'UQ Holder',
      series_num: 1,
      author: 'Ken Akamatsu',
      location: 'Sitting Room',
      image_src:
        'https://m.media-amazon.com/images/P/B00IIP0YVE.01._SCLZZZZZZZ_SX500_.jpg',
    },
    {
      id: 3,
      title: 'Bleach',
      series_num: 1,
      author: 'Tite Kubo',
      location: 'Spare Bedroom',
      image_src:
        'https://m.media-amazon.com/images/P/1591164419.01._SCLZZZZZZZ_SX500_.jpg',
    },
  ])
}

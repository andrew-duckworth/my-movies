/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('shows').del()
  await knex('shows').insert([
    {
      id: 1,
      name: 'Hessle Audio Show',
      genres: 'UK Bass, Techno, House, ',
      description: 'asdasdasd',
      tracklist: 'asdasdasd',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdasdasd',
    },
    {
      id: 2,
      name: 'PLO_radio',
      genres: 'Ambient, Ambient Techno, House, Deep House, Dub Techno',
      description: 'asdasdasd',
      tracklist: 'asdasdasd',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdasdasd',
    },
    {
      id: 3,
      name: 'airy',
      genres: 'Ambient',
      description: 'asdadsd',
      tracklist: 'asdasda',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdasdasd',
    },
    {
      id: 4,
      name: 'samo DJ Flyer show',
      genres: 'Outsider House',
      description: 'sadasd',
      tracklist: 'asdasdasd',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdasdasd',
    },
    {
      id: 5,
      name: 'Chi Town',
      genres: 'Chicago House',
      description: 'asdasd',
      tracklist: 'asdassdasd',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdasdasssssssd',
    },
    {
      id: 6,
      name: 'Objekt Hour',
      genres: 'techno',
      description: 'asdasdasd',
      tracklist: 'asdasdasd',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdasdasd',
    },
    {
      id: 7,
      name: 'Breakfast Show with Flo',
      genres: 'Folk, Outsider Pop',
      description: 'asdafsd',
      tracklist: 'asdasfad',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdafsdasd',
    },
    {
      id: 8,
      name: 'Illian Tape',
      genres: 'techno, bass',
      description: 'asdafsd',
      tracklist: 'asdasfad',
      audio_length: '56:58',
      img: 'asdas',
      resource: 'asdafsdasd',
    },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('planets').del()
  await knex('planets').insert([
    { id: 101, name: 'Sun', verb: 'You fundamentally are ' },
    { id: 102, name: 'Moon', verb: 'You experience emotion in a ' },
    { id: 103, name: 'Ascendant', verb: 'You seem ' },
    { id: 104, name: 'Mercury', verb: 'You communicate in a ' },
    { id: 105, name: 'Venus', verb: 'You love in a ' },
    { id: 106, name: 'Mars', verb: 'You take action in a ' },
    { id: 107, name: 'Jupiter', verb: 'You expand through a ' },
    { id: 108, name: 'Saturn', verb: 'You discipline myself in a ' },
    { id: 109, name: 'Uranus', verb: 'Your generation innovates in a ' },
    { id: 110, name: 'Neptune', verb: 'You dream in a ' },
    { id: 111, name: 'Pluto', verb: 'Your generation experiences power in a ' },
  ])
}

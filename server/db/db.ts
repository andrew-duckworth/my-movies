import config from './knexfile'
import knex from 'knex'
import { TeamsData } from '../../models/Teams'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getTeams(db = connection) {
  return db('teams').select('*')
}

export function delTeam(teamId: number, db = connection) {
  return db('teams').del().where({ id: teamId }).returning('*')
}

export function addTeam(newTeam: TeamsData, db = connection) {
  return db('teams')
    .insert(newTeam)
    .returning('*')
    .then((result) => result[0])
}

export function updateTeam(
  updatedTeam: TeamsData,
  id: number,
  db = connection
) {
  return db('teams')
    .where('id', id)
    .update({
      name: updatedTeam.name,
      manager: updatedTeam.manager,
      city: updatedTeam.city,
      logo: updatedTeam.logo,
    })
    .returning('*')
}

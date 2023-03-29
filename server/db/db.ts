import config from './knexfile'
import knex from 'knex'
import { connect } from 'superagent'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getTeams(db = connection) {
  return db('teams').select('*')
}

export function delTeam(db = connection, teamId: number) {
  return db('teams').del().where({ id: teamId })
}

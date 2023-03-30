// this is the functions page dealing directly with the database

import connection from '../connection'
import { Family } from '../../common/allModels'

export function getAllFamily(db = connection): Promise<Family[]> {
  return db('family').select()
}

//other functions in here will include pulling family members by id
export function getFamilyById(id: number, db = connection): Promise<Family> {
  return db('family').select().where('id', id).first()
}

export function delFamMember(id: number, db = connection): Promise<number> {
  return db('family').del().where('id', id)
}

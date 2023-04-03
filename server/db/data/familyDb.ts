// this is the functions page dealing directly with the database

import connection from '../connection'
import { Family, FamilyDetails } from '../../common/allModels'

export function getAllFamilyDB(db = connection): Promise<Family[]> {
  return db('family').select()
}

//other functions in here will include pulling family members by id
export function getFamilyByIdDB(id: number, db = connection): Promise<Family> {
  return db('family').select().where('id', id).first()
}

export function delFamMemberDB(id: number, db = connection): Promise<number> {
  return db('family').del().where('id', id)
}


export function addFamMemberDB(formData: Family, db = connection): Promise<Family> {
  return db('family').insert(formData).returning(['id', 'name', 'nicknames', 'position', ])
}


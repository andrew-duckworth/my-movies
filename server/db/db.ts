import connection from './connection'

export function getAllPhotos(db = connection): Promise<Albums> {
  return db('albums').select('name', 'year', 'image')
}

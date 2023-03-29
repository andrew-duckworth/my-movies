import connection from './connection'

export function getAllPhotos(db = connection): Promise<string> {
  return db('albums').select('id', 'name', 'year', 'image')
}

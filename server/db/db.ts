import connection from './connection'

export function getAllAlbums(db = connection): Promise<Albums[]> {
  return db('albums').select('id', 'name', 'year', 'image')
}

module.exports = {
  getAllAlbums,
}

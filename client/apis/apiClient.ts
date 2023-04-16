import request from 'superagent'
import { AlbumsInterface } from '../common/albums'

export function getAllAlbums(): Promise<AlbumsInterface[]> {
  return request.get('/api/v1/albums').then((i) => i.body)
}

export function addNewAlbum(
  newAlbum: AlbumsInterface
): Promise<AlbumsInterface> {
  return request
    .post('/api/v1/albums')
    .send(newAlbum)
    .then((res) => {
      return res.body
    })
}

export function deleteAlbum(id: number) {
  return request.delete(`${id}`).then((res) => res.body)
}

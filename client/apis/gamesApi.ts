import request from 'superagent'
import { Game, Searchrequest } from '../../common/interfaces'

export function fetchAllGames(): Promise<Game[]> {
  return request.get('/api/v1/games').then((bookres) => bookres.body)
}

export function postGame(searchStr: string): Promise<Game[]> {
  const obj: Searchrequest = {
    searchStr,
  }
  console.log('post start')
  return request
    .post('api/v1/games/', obj)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

export function removeGame(id: number): Promise<number | void> {
  return request
    .delete('/api/v1/games')
    .send({ id })
    .then((res) => res.status)
    .catch((err) => {
      console.log(err.message)
    })
}

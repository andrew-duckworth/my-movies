import request from 'superagent'
import { Game } from '../../common/interfaces'

const key = '&key=f5d35997743c4c2ca13f7f8936a30ef8'
export function fetchAllGames(): Promise<Game[]> {
  return request.get('/api/v1/games').then((bookres) => bookres.body)

}

export function postGame(searchStr: string): Promise<Game[]> {
const gameData = {
  name: '',
  released: '',
  image: '',
}
return request
.get(`https://rawg.io/api/games/?search=${searchStr}${key}`)
.then((rawData) => {
  gameData.name = rawData.body.results[0].name
  gameData.released = rawData.body.results[0].released
  gameData.image = rawData.body.results[0].background_image

  return request.post('api/v1/games').send(gameData)
}).then((res) => res.body)
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
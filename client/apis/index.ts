import request from 'superagent'
import { Game, GameDetails } from '../../common/game'

const gameUrl = '/v1/games/'

// get

export function fetchGames(): Promise<Game[]> {
  return request.get(gameUrl).then((resObj) => {
    console.log(resObj.body)
    return resObj.body
  })
}

// del

export function delGame(id: number): Promise<void> {
  return request.delete(gameUrl + id).then(() => {})
}

// add

export function addGame(formdata: GameDetails): Promise<Game> {
  return request
    .post(gameUrl)
    .send(formdata)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

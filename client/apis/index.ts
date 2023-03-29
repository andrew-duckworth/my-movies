import request from 'superagent'
import { Game } from '../../common/game'

export function fetchAllGames(): Promise<Game[]> {
  return request.get('/v1/games').then((resObj) => {
    console.log(resObj.body)
    return resObj.body
  })
}

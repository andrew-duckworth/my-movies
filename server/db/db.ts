import con from './connection'
import { Game } from '../../common/game'

export function getAllGames(db = con): Promise<Game[]> {
  return db('games').select('*')
}

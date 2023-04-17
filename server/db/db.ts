import con from './connection'
import { Game, GameDetails } from '../../common/game'

export function getAllGames(db = con): Promise<Game[]> {
  return db('games').select('*')
}

// delete

export function deleteAGame(id: number, db = con): Promise<void> {
  return db('games').where({ id }).del()
}

// add

export function addAGame(game: GameDetails, db = con): Promise<Game> {
  return db('games')
    .insert(game)
    .returning(['*'])
    .then((data) => data[0])
}

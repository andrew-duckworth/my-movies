import type { ThunkAction } from '../store'
import { fetchGames, delGame, addGame } from '../apis'
import { Game, GameDetails } from '../../common/game'

export const SHOW_GAMES = 'SHOW_GAMES'
export const ADD_GAME = 'ADD_GAME'
export const DEL_GAME = 'DEL_GAME'

export type Action =
  | { type: 'SHOW_GAMES'; payload: Game[] }
  | { type: 'DEL_GAME'; payload: number }
  | { type: 'ADD_GAME'; payload: GameDetails }

// --- simple --- //

// get
export function getAllGamesAction(dbData: Game[]): Action {
  return {
    type: 'SHOW_GAMES',
    payload: dbData,
  }
}

// del

export function delAGameAction(id: number): Action {
  return {
    type: 'DEL_GAME',
    payload: id,
  }
}

// add

export function addAGameAction(game: GameDetails): Action {
  return {
    type: 'ADD_GAME',
    payload: game,
  }
}

// --- thuncction --- //

// get

export function getThunk(): ThunkAction {
  return (dispatch) => {
    // Client api
    return fetchGames()
      .then((data) => {
        // simple
        dispatch(getAllGamesAction(data))
      })
      .catch((err) => {
        console.log(err.message + 'fetchthunk err')
      })
  }
}

// del

export function delThunk(id: number): ThunkAction {
  return (dispatch) => {
    return delGame(id)
      .then(() => {
        dispatch(delAGameAction(id))
      })
      .catch((err) => {
        console.log(err.message + 'delthunk err')
      })
  }
}

// add

export function addThunk(game: GameDetails): ThunkAction {
  return (dispatch) => {
    return addGame(game)
      .then((game) => {
        dispatch(addAGameAction(game))
      })
      .catch((err) => {
        console.log(err.message + 'addthunk err')
      })
  }
}

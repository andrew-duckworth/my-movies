import { SHOW_GAMES, DEL_GAME, ADD_GAME, Action } from '../actions/gameActions'
import { Game } from '../../common/game'

const intialState = [] as Game[]

export function gameReducer(state = intialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_GAMES:
      return payload

    case DEL_GAME:
      return state.filter((item) => {
        return item.id !== payload
      })

    case ADD_GAME:
      return [payload, ...state]

    default:
      return state
  }
}

import { Action, RECEIVE_HAMSTERS, UPDATE_HAMSTERS } from '../actions/hamsters'
import { Hamsters } from '../../models/hamster'

const initialState: Hamsters[] = [
  { id: 10, name: 'Dougless', image: './random' },
]

function hamsters(state = initialState, action: Action): Hamsters[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_HAMSTERS:
      return payload
    case UPDATE_HAMSTERS:
      return state.map((hamster) => {
        if (hamster.name === payload.old) {
          hamster.name = payload.new
        }
        return hamster
      })
    default:
      return state
  }
}

export default hamsters

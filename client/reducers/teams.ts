import { Action, RECEIVE_TEAMS, DELETE_TEAM, ADD_TEAM } from '../actions/teams'
import { TeamsData } from '../../models/Teams'

const initialState = []

export default function reducer(
  state = initialState,
  action: Action
): TeamsData[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_TEAMS:
      return payload
    case DELETE_TEAM:
      return state.filter((team) => team !== payload)
    case ADD_TEAM:
      return {
        ...state,
      }
    default:
      return state
  }
}

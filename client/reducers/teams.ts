import { Action, RECEIVE_TEAMS } from '../actions/teams'
import { TeamsData } from '../../models/Teams'

const initialState: TeamsData[] = []

export default function teams(
  state = initialState,
  action: Action
): TeamsData[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_TEAMS:
      return payload
    default:
      return state
  }
}

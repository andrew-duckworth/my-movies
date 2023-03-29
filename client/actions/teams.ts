import type { ThunkAction } from '../store'

import { TeamsData } from '../../models/Teams'

import { getTeamsApi } from '../apis/clientApi'
import teams from '../reducers/teams'

export const REQUEST_TEAMS = 'REQUEST_TEAMS'
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'
export const DELETE_TEAM = 'DELETE_TEAM'
export const SHOW_ERROR = 'SHOW_ERROR'

export type Action =
  | { type: typeof REQUEST_TEAMS; payload: null }
  | { type: typeof DELETE_TEAM; payload: string }
  | { type: typeof RECEIVE_TEAMS; payload: TeamsData[] }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestTeams(): Action {
  return {
    type: REQUEST_TEAMS,
    payload: null,
  }
}

export function receiveTeams(teams: any): Action {
  return {
    type: RECEIVE_TEAMS,
    payload: teams,
  }
}

export function deleteTeams(team: any): Action {
  return {
    type: DELETE_TEAM,
    payload: team,
  }
}

export function fetchTeams(): ThunkAction {
  return (dispatch) => {
    dispatch(requestTeams())
    return getTeamsApi().then((data) => {
      dispatch(receiveTeams(data))
      console.log(data)
    })
  }
}

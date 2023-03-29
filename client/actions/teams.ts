import type { ThunkAction } from '../store'

import { TeamsData } from '../../models/Teams'

import { deleteTeamsApi, getTeamsApi } from '../apis/clientApi'
import teams from '../reducers/teams'
import { delTeam } from '../../server/db/db'

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

export function deleteTeams(team: TeamsData): Action {
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

export function deleteTeamsThunk(team: TeamsData): ThunkAction {
  return async (dispatch) => {
    try {
      await deleteTeamsApi(team)
      await delTeam(team.id)
      dispatch(deleteTeams(team))
    } catch (err: unknown) {
      return console.log(err.message)
    }
  }
}

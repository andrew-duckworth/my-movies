import type { ThunkAction } from '../store'

import { TeamsData } from '../../models/Teams'

import { deleteTeamsApi, getTeamsApi, editTeamsApi } from '../apis/clientApi'
import teams from '../reducers/teams'
import { delTeam } from '../../server/db/db'

export const REQUEST_TEAMS = 'REQUEST_TEAMS'
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'
export const DELETE_TEAM = 'DELETE_TEAM'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_TEAM = 'ADD_TEAM'
export const EDIT_TEAM = 'EDIT_TEAM'

export type Action =
  | { type: typeof REQUEST_TEAMS; payload: null }
  | { type: typeof DELETE_TEAM; payload: string }
  | { type: typeof RECEIVE_TEAMS; payload: TeamsData[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof ADD_TEAM; payload: TeamsData }
  | { type: typeof EDIT_TEAM; payload: TeamsData }

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

export function deleteTeam(id: string): Action {
  return {
    type: DELETE_TEAM,
    payload: id,
  }
}

export function addTeam(team: TeamsData) {
  return {
    type: ADD_TEAM,
    payload: team,
  }
}

// export function editTeam(id: number, team: TeamsData) {
//   return {
//     type: EDIT_TEAM,
//     payload: {
//       id,
//       team,
//     },
//   }
// }

export function editTeam(id: number, updatedTeam: TeamsData): ThunkAction {
  return (dispatch) => {
    return editTeamsApi(id, updatedTeam).then((data) => {
      dispatch({
        type: EDIT_TEAM,
        payload: data,
      })
    })
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

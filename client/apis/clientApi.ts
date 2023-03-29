import request from 'superagent'
import { TeamsData } from '../../models/Teams'

const teamsUrl = '/teams'

export function getTeamsApi() {
  return request.get(teamsUrl).then((resObj) => resObj.body)
}

export function deleteTeamsApi(team: TeamsData) {
  return request.delete(`${teamsUrl}/${team.id}`).then((res) => res)
}

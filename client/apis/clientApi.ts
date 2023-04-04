import request from 'superagent'
import { TeamsData } from '../../models/Teams'

const teamsUrl = '/teams'

export function getTeamsApi() {
  return request.get(teamsUrl).then((resObj) => resObj.body)
}

export function deleteTeamsApi(team: TeamsData) {
  return request.delete(`${teamsUrl}/${team.id}`).then((res) => res)
}

export function addTeamsApi(newTeam: TeamsData) {
  return request
    .post(teamsUrl)
    .send(newTeam)
    .then((res) => res.body)
}

export function editTeamsApi(newTeam: TeamsData) {
  return request
    .patch(`${teamsUrl}/${newTeam.id}`)
    .send(newTeam)
    .then((res) => res.body[0])
}

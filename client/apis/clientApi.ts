import request from 'superagent'

const teamsUrl = '/teams'

export function getTeamsApi() {
  return request.get(teamsUrl).then((resObj) => resObj.body)
}

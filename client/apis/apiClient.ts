import request from 'superagent'
import { Family } from '../../server/common/allModels'

function fetchTheFamily(): Promise<Family[]> {
  return request.get('/api/v1/family').then((responseObj) => responseObj.body)
}

// function getMemberById(): Promise<Family>{
//   return request.get('api/v1/family/:id').then(())
// }

export default fetchTheFamily

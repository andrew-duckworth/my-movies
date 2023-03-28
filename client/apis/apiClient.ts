import request from 'superagent'

import { Hamsters } from '../../models/hamster'

const hamstersUrl = '/api/v1/hamsters/'

export function getHamsters(): Promise<Hamsters[]> {
  return request.get(hamstersUrl).then((res) => res.body)
}

// export function addNewWidget(): Promise<Widget> {
//   return request.post(widgetUrl).then((res) => res.body)
// }

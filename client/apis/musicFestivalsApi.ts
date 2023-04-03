import request from 'superagent'
import { MusicFestivalDetails } from '../../common/musicFestivalsTypes'

const URL = '/api/v1/musicFestivals'

export function fetchFest() {
  console.log('4: In the internal api call')

  return request
    .get(URL) // call internal api here
    .then((res) => {
      console.log('7: client api res: ', res.body)
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}

import { UserAction } from '../actions/zodiac'
import * as Models from '../../common/Starsign'

const initialState = [] as Models.Chart[]

export default function chart(
  state = initialState,
  { type, payload }: UserAction
): Models.Chart[] {
  switch (type) {
    case 'RECEIVE_CHART':
      return payload
    default:
      return state
  }
}

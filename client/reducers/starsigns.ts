import { UserAction } from '../actions/zodiac'
import * as Models from '../../common/Starsign'

const initialState = [] as Models.Starsign[]

export default function starsigns(
  state = initialState,
  { type, payload }: UserAction
): Models.Starsign[] {
  switch (type) {
    case 'RECEIVE_SIGNS':
      return payload
    default:
      return state
  }
}

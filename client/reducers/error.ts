import { ErrorAction } from '../actions/error'

export default function (
  state = undefined as undefined | string,
  { type, payload }: ErrorAction
): undefined | string {
  switch (type) {
    case 'SET_ERROR':
      return payload
    default:
      return state
  }
}

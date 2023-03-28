import type { ThunkAction } from '../store'
import { Hamsters } from '../../models/hamster'

import { fetchHamsters } from '../apis/hammies'

export const RECEIVE_HAMSTERS = 'RECEIEVE_HAMSTERS'

export type Action = { type: typeof RECEIVE_HAMSTERS; payload: Hamsters[] }

export function fetchHamsters(): ThunkAction {
  return (dispatch) => {
    return
  }
}

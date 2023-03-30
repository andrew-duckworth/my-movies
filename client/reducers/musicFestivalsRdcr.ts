import { FestAction, RECEIVE_FESTS } from '../actions/musicFestival'

const initialState = [
  { name: 'Jimbo', country: 'Magicland', date: '01 April' },
  { name: 'Fartrell Cluggins', country: 'New Yoooorkkk', date: '29 Feb' },
]

function reducer(state = initialState, action: FestAction): object {
  const { type, payload } = action

  switch (type) {
    case 'RECEIVE_FEST':
      return payload
    default:
      return state
  }
}

export default reducer

import { Action } from '../actions/Actions'
import { Book } from '../../common/interfaces'

const initialState: Book[] = [
  {
    id: 1,
    title: 'Ready Player One',
    publish_date: '01 June 1993',
    author_name: 'Ernest Cline',
    cover_image:
      'https://m.media-amazon.com/images/I/61vSHg6eUSL._SX300_SY300_QL70_FMwebp_.jpg',
  },
]

function reducer(state = initialState, action: Action): Book[] {
  const { type, payload } = action

  switch (type) {
    case 'GOT_BOOKS':
      return payload
    case 'ADD_BOOK':
      return [...state, payload]
    case 'DEL_BOOK':
      console.log(state.filter((e) => e.id !== payload))
      return state.filter((e) => e.id !== payload)
    default:
      return state
  }
}

export default reducer
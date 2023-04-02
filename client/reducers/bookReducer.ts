import { Action } from '../actions/Actions'
import { Book } from '../../common/interfaces'

const initialState: Book[] = [
  {
    id: 1,
    title: 'The Point of View of the Universe',
    publish_date: 'Jun 01, 2016',
    author_name: 'Katarzyna de Lazari-Radek, Peter Singer',
    cover_image: 'https://covers.openlibrary.org/b/isbn/0198776721-L.jpg',
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

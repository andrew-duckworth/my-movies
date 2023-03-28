import { BookAction } from '../actions/bookAction'
import { Book } from '../../common/interfaces'

const initialState = [
  {
    id: 1,
    title: 'Ready Player One',
    publish_date: '01 June 1993',
    author_name: 'Ernest Cline',
    cover_image:
      'https://m.media-amazon.com/images/I/61vSHg6eUSL._SX300_SY300_QL70_FMwebp_.jpg',
  },
]

function reducer(state = initialState, action: BookAction): Book[] {
  const { type, payload } = action

  switch (type) {
    case 'DISPLAY':
      return null
    default:
      return state
  }
}

export default reducer

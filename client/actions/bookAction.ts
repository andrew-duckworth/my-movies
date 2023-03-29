import type { ThunkAction } from '../store'
import { Book } from '../../common/interfaces'
import { fetchAllBooks } from '../apis/booksApi'

export type BookAction =
  | { type: 'DISPLAY_BOOKS'; payload: null }
  | { type: 'LOADING_BOOKS'; payload: boolean }
  | { type: 'GOT_BOOKS'; payload: Book[] }

export function loadingBooks(): BookAction {
  console.log('LOAD')
  return {
    type: 'LOADING_BOOKS',
    payload: true,
  }
}

export function receiveBooks(books: Book[]): BookAction {
  return {
    type: 'GOT_BOOKS',
    payload: books,
  }
}

export function displayBooks(): ThunkAction {
  return (dispatch) => {
    dispatch(loadingBooks())
    return fetchAllBooks()
      .then((books) => {
        dispatch(receiveBooks(books))
      })
      .catch((err: Error) => console.log(err.message))
  }
}

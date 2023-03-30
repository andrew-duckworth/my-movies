import type { ThunkAction } from '../store'
import { Book } from '../../common/interfaces'
import { fetchAllBooks, removeBook } from '../apis/booksApi'

export type BookAction =
  | { type: 'DISPLAY_BOOKS'; payload: null }
  | { type: 'LOADING_BOOKS'; payload: null }
  | { type: 'GOT_BOOKS'; payload: Book[] }
  | { type: 'ADD_BOOK'; payload: Book }
  | { type: 'LOADING_NEW_BOOK'; payload: null }
  | { type: 'DEL_BOOK'; payload: number }
  | { type: 'DELETING_BOOK'; payload: null }

export function loadingBooks(): BookAction {
  console.log('LOAD BOOKS')
  return {
    type: 'LOADING_BOOKS',
    payload: null,
  }
}

export function loadingNewBooks() {
  console.log('LOAD NEW BOOK')
  return {
    type: 'LOADING_NEW_BOOK',
    payload: null,
  }
}

export function addBookToGlobal(book: Book): BookAction {
  return {
    type: 'ADD_BOOK',
    payload: book,
  }
}

export function removeBookFromGlobal(book: any): BookAction {
  return {
    type: 'DEL_BOOK',
    payload: book,
  }
}

export function receiveBooks(books: Book[]): BookAction {
  return {
    type: 'GOT_BOOKS',
    payload: books,
  }
}

export function deletingBook(): BookAction {
  return {
    type: 'DELETING_BOOK',
    payload: null,
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

export function deleteBook(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(deletingBook())
    return removeBook(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))
  }
}

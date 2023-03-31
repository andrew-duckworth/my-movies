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

export function loadingNewBooks(): BookAction {
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

export function removeBookFromGlobal(id: number): BookAction {
  console.log('delfromglobal')
  return {
    type: 'DEL_BOOK',
    payload: id,
  }
}

export function receiveBooks(books: Book[]): BookAction {
  return {
    type: 'GOT_BOOKS',
    payload: books,
  }
}

export function deletingBook(): BookAction {
  console.log('del')
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
      .then((status) => {
        if (status === 200) {
          dispatch(removeBookFromGlobal(id))
        } else {
          console.log('book may not have been deleted')
        }
      })
      .catch((err) => console.log(err.message))
  }
}

import type { ThunkAction } from '../store'
import { Book, Game } from '../../common/interfaces'
import { fetchAllBooks, removeBook } from '../apis/booksApi'
import { fetchAllGames, removeGame } from '../apis/gamesApi';

export type Action =
  | { type: 'DISPLAY_BOOKS'; payload: null }
  | { type: 'LOADING_BOOKS'; payload: null }
  | { type: 'GOT_BOOKS'; payload: Book[] }
  | { type: 'ADD_BOOK'; payload: Book }
  | { type: 'LOADING_NEW_BOOK'; payload: null }
  | { type: 'DEL_BOOK'; payload: number }
  | { type: 'DELETING_BOOK'; payload: null } | 
  { type: 'DISPLAY_GAMES'; payload: null } | {type: 'GOT_GAMES'; payload: Game[]} | {type: 'ADD_GAME'; payload: Game} | {type: 'DEL_GAME'; payload: number}


export function loadingBooks(): Action {
  console.log('LOAD BOOKS')
  return {
    type: 'LOADING_BOOKS',
    payload: null,
  }
}

export function loadingNewBooks(): Action {
  return {
    type: 'LOADING_NEW_BOOK',
    payload: null,
  }
}

export function addBookToGlobal(book: Book): Action {
  return {
    type: 'ADD_BOOK',
    payload: book,
  }
}

export function addGameToGlobal(game: Game): Action {
  return {
    type: 'ADD_GAME',
    payload: game
  }
}

export function removeBookFromGlobal(id: number): Action {
  return {
    type: 'DEL_BOOK',
    payload: id,
  }
}

export function removeGameFromGlobal(id: number): Action {
  return {
    type: 'DEL_GAME',
    payload: id,
  }
}

export function receiveBooks(books: Book[]): Action {
  return {
    type: 'GOT_BOOKS',
    payload: books,
  }
}

export function receiveGames(games: Game[]): Action {
  return {
    type: 'GOT_GAMES',
    payload: games,
  }
}

export function deletingBook(): Action {
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

export function displayGames(): ThunkAction {
  return (dispatch) => {
    return fetchAllGames().then((games) => {
      dispatch(receiveGames(games))
    })      .catch((err: Error) => console.log(err.message))

  }
}

export function deleteGame(id: number): ThunkAction {
  return (dispatch) => {
    return removeGame(id)
      .then((status) => {
        if (status === 200) {
          dispatch(removeGameFromGlobal(id))
        } else {
          console.log('game may not have been deleted')
        }
      })
      .catch((err) => console.log(err.message))
  }
}
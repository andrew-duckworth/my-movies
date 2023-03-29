import { Deck, DeckInfo } from '../../models/deck'
import * as A from '../apis/decks'
import { ThunkAction } from '../store'
import { setError } from './error'

export type DeckAction =
  | { type: 'SET_DECKS'; payload: Deck[] }
  | { type: 'NEW_DECK' | 'MOD_DECK'; payload: Deck }
  | { type: 'CUT_DECK'; payload: number }

function setDecks(decks: Deck[]): DeckAction {
  return { type: 'SET_DECKS', payload: decks }
}

function newDeck(deck: Deck): DeckAction {
  return { type: 'NEW_DECK', payload: deck }
}

function modDeck(deck: Deck): DeckAction {
  return { type: 'MOD_DECK', payload: deck }
}

function cutDeck(id: number): DeckAction {
  return { type: 'CUT_DECK', payload: id }
}

export function getDecks(): ThunkAction {
  return (dispatch) => {
    return A.getAllDecks()
      .then((decks) => {
        dispatch(setDecks(decks))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addDeck(deck: DeckInfo): ThunkAction {
  return (dispatch) => {
    return A.addDeck(deck)
      .then((deck) => {
        dispatch(newDeck(deck))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function updDeck(deck: Deck): ThunkAction {
  return (dispatch) => {
    return A.updDeck(deck)
      .then((deck) => {
        dispatch(modDeck(deck))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function delDeck(id: number): ThunkAction {
  return (dispatch) => {
    return A.delDeck(id)
      .then(() => {
        dispatch(cutDeck(id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

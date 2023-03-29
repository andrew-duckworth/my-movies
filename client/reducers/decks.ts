import { Deck } from '../../models/deck'
import { DeckAction } from '../actions/decks'

export default function (
  state = [] as Deck[],
  { type, payload }: DeckAction
): Deck[] {
  switch (type) {
    case 'SET_DECKS':
      return payload
    case 'NEW_DECK':
      return [...state, payload]
    case 'CUT_DECK':
      return state.filter((deck) => deck.id !== payload)
    case 'MOD_DECK':
      return state.map((deck) => (deck.id === payload.id ? payload : deck))
    default:
      return state
  }
}

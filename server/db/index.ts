import conn from './connection'
import { Deck } from '../../models/deck'

export function getAllDecks(db = conn): Promise<Deck[]> {
  return db('decks').select()
}

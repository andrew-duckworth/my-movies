import conn from './connection'
import { Deck, DeckInfo } from '../../models/deck'

export function getAllDecks(db = conn): Promise<Deck[]> {
  return db('decks').select()
}

export function getDeckById(id: number, db = conn): Promise<Deck> {
  return db('decks').first().where({ id })
}

export function addDeck(deck: DeckInfo, db = conn): Promise<Deck> {
  return db('decks')
    .insert(deck)
    .then(([id]) => ({ id, ...deck }))
}

export function updDeck(deck: Deck, db = conn): Promise<Deck> {
  return db('decks')
    .update(deck)
    .where('id', deck.id)
    .returning('*')
    .then(([deck]) => deck)
}

export function delDeck(id: number, db = conn) {
  return db('decks').delete().where({ id })
}

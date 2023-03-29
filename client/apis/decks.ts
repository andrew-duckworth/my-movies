import request from 'superagent'
import { Deck, DeckInfo } from '../../models/deck'

export function getAllDecks(): Promise<Deck[]> {
  return request.get('/api/v1/decks').then((res) => res.body)
}

export function addDeck(deck: DeckInfo): Promise<Deck> {
  return request
    .post('api/v1/decks')
    .send(deck)
    .then((res) => res.body)
}

export function updDeck(deck: Deck): Promise<Deck> {
  return request
    .patch(`/api/v1/decks/${deck.id}`)
    .send(deck)
    .then((res) => res.body)
}

export function delDeck(id: number): Promise<void> {
  return request.delete(`/api/v1/decks/${id}`).then(() => {})
}

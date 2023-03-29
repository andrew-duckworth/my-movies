import * as T from '../../models/deck'
import Deck from './Deck'

interface Props {
  decks: T.Deck[]
}

export default function Decks({ decks }: Props) {
  return (
    <div className="deck__grid">
      {decks.map((deck) => (
        <Deck key={deck.id} {...deck} />
      ))}
    </div>
  )
}

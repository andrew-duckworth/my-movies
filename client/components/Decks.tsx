import { useAppSelector } from '../hooks/redux'
import Deck from './Deck'
import { Link } from 'react-router-dom'

export default function Decks() {
  const decks = useAppSelector((state) => state.decks)
  return (
    <>
      <div className="deck__grid">
        {decks.map((deck) => (
          <Deck key={deck.id} {...deck} />
        ))}
      </div>
      <Link to="/add">Add Deck</Link>
    </>
  )
}

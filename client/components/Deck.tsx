import * as T from '../../models/deck'
import { Link } from 'react-router-dom'

export default function Deck(deck: T.Deck) {
  return (
    <div
      className={`deck deck--${deck.state} deck--${
        deck.digital ? 'digital' : 'paper'
      }`}
    >
      <h2>{deck.name}</h2>
      <p>
        {deck.format} <span>{deck.state}</span>
      </p>
      <img src={deck.image} alt={`Art by ${deck.img_attribution}`} />
      <p>Art by {deck.img_attribution}</p>
      <Link to={`/${deck.id}`}>Edit</Link>
    </div>
  )
}

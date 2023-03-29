import * as T from '../../models/deck'

export default function Deck(deck: T.Deck) {
  return (
    <div className={`deck deck--${deck.state}`}>
      <p>{deck.name}</p>
      <img src={deck.image} alt={`Art by ${deck.img_attribution}`} />
      <p>
        {deck.format} <span>{deck.state}</span>
      </p>
    </div>
  )
}

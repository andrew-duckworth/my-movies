import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeckInfo } from '../../models/deck'
import { addDeck } from '../actions/decks'
import { useAppDispatch } from '../hooks/redux'

export default function AddDeck() {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const [deck, setDeck] = useState({
    name: '',
    format: 'Commander',
    state: 'built',
    image: '',
    img_attribution: '',
    digital: false,
  } as DeckInfo)

  function handleChange(
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setDeck({ ...deck, [evt.target.name]: evt.target.value })
  }

  function handleRadio() {
    setDeck({ ...deck, digital: !deck.digital })
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    dispatch(addDeck(deck))
    nav('/')
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Deck Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={deck.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="format">Format: </label>
        <input
          type="text"
          name="format"
          id="format"
          value={deck.format}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <select
          name="state"
          id="state"
          value={deck.state}
          onChange={handleChange}
        >
          <option value="theoretical">Theoretical</option>
          <option value="building">Building</option>
          <option value="built">Built</option>
          <option value="retired">Retired</option>
        </select>
      </div>
      <fieldset>
        <legend>Art:</legend>
        <div>
          <label htmlFor="image">Image src: </label>
          <input
            type="text"
            name="image"
            id="image"
            value={deck.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img_attribution">Attribution: </label>
          <input
            type="text"
            name="img_attribution"
            id="img_attribution"
            value={deck.img_attribution}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Platform:</legend>
        <input
          type="radio"
          name="digital"
          id="paper"
          value="false"
          checked={!deck.digital}
          onChange={handleRadio}
        />
        <label htmlFor="paper">Paper</label>
        <input
          type="radio"
          name="digital"
          id="arena"
          value="true"
          checked={deck.digital}
          onChange={handleRadio}
        />
        <label htmlFor="arena">Arena</label>
      </fieldset>
      <button>Add Deck</button>
    </form>
  )
}

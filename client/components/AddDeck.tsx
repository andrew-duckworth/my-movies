import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeckInfo } from '../../models/deck'
import { addDeck } from '../actions/decks'
import { useAppDispatch } from '../hooks/redux'
import { getCompletions, getCardArt } from '../apis/scryfall'
import { setError } from '../actions/error'
import { throttle } from 'lodash'

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

  const [completions, setCompletions] = useState([] as string[])
  const [name, setName] = useState('')

  function handleChange(
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setDeck({ ...deck, [evt.target.name]: evt.target.value })
  }

  function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value
    if (completions.includes(val)) {
      getCardArt(val)
        .then((data) => setDeck({ ...deck, ...data }))
        .catch((err) => dispatch(setError(err.message)))
    }
    setName(val)
    getCompletions(val)
      .then((completions) => setCompletions(completions.map((e) => '‍' + e)))
      .catch((err) => dispatch(setError(err.message)))
  }

  function doSearch() {
    getCardArt(name)
      .then((data) => setDeck({ ...deck, ...data }))
      .catch((err) => dispatch(setError(err.message)))
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
        <div>
          <label htmlFor="search">Or search for card art: </label>
          <input
            type="text"
            name="q"
            id="search"
            value={name}
            onChange={throttle(handleSearch, 100)}
            list="completions"
          />
          <datalist id="completions">
            {completions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </datalist>
          <button type="button" onClick={throttle(doSearch, 100)}>
            Get card art
          </button>
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

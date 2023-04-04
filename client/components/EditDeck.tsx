import { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { updDeck } from '../actions/decks'
import { Deck } from '../../models/deck'
import { getCompletions, getCardArt } from '../apis/scryfall'
import { setError } from '../actions/error'
import { throttle } from 'lodash'

export default function EditDeck() {
  const id = Number(useParams().id)
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  const deck = useAppSelector((state) =>
    state.decks.find((deck) => deck.id === id)
  )
  const [editedDeck, setDeck] = useState(deck as Deck)

  const [completions, setCompletions] = useState([] as string[])
  const [name, setName] = useState('')

  function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value
    if (completions.includes(val)) {
      getCardArt(val)
        .then((data) => setDeck({ ...editedDeck, ...data }))
        .catch((err) => dispatch(setError(err.message)))
    }
    setName(val)
    getCompletions(val)
      .then((completions) => setCompletions(completions.map((e) => '‍' + e)))
      .catch((err) => dispatch(setError(err.message)))
  }

  function doSearch() {
    getCardArt(name)
      .then((data) => setDeck({ ...editedDeck, ...data }))
      .catch((err) => dispatch(setError(err.message)))
  }

  function handleChange(
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setDeck({ ...editedDeck, [evt.target.name]: evt.target.value })
  }

  function handleRadio() {
    setDeck({ ...editedDeck, digital: !editedDeck.digital })
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    dispatch(updDeck(editedDeck))
    nav('/')
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Deck Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={editedDeck.name}
        onChange={handleChange}
      />
      <label htmlFor="format">Format: </label>
      <input
        type="text"
        name="format"
        id="format"
        value={editedDeck.format}
        onChange={handleChange}
      />
      <label htmlFor="state">State:</label>
      <select
        name="state"
        id="state"
        value={editedDeck.state}
        onChange={handleChange}
      >
        <option value="theoretical">Theoretical</option>
        <option value="building">Building</option>
        <option value="built">Built</option>
        <option value="retired">Retired</option>
      </select>
      <fieldset>
        <legend>Art:</legend>
        <label htmlFor="image">Image src: </label>
        <input
          type="text"
          name="image"
          id="image"
          value={editedDeck.image}
          onChange={handleChange}
        />
        <label htmlFor="img_attribution">Attribution: </label>
        <input
          type="text"
          name="img_attribution"
          id="img_attribution"
          value={editedDeck.img_attribution}
          onChange={handleChange}
        />
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
      </fieldset>
      <fieldset>
        <legend>Platform:</legend>
        <input
          type="radio"
          name="digital"
          id="paper"
          value="false"
          checked={!editedDeck.digital}
          onChange={handleRadio}
        />
        <label htmlFor="paper">Paper</label>
        <input
          type="radio"
          name="digital"
          id="arena"
          value="true"
          checked={editedDeck.digital}
          onChange={handleRadio}
        />
        <label htmlFor="arena">Arena</label>
      </fieldset>
      <button>Update Deck</button>
    </form>
  )
}

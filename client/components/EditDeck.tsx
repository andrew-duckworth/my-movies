import { useParams } from 'react-router-dom'
import { Deck } from '../../models/deck'
import { useAppSelector } from '../hooks/redux'

export default function EditDeck() {
  const id = Number(useParams().id)
  const deck = useAppSelector((state) =>
    state.decks.find((deck) => deck.id === id)
  )
  const [editedDeck]

  return (
    <form action="">
      <label htmlFor="name">Deck Name: </label>
      <input type="text" name="name" id="name" />
      <label htmlFor="format">Format: </label>
      <input type="text" name="format" id="format" />
      <label htmlFor="state">State:</label>
      <select name="state" id="state">
        <option value="theoretical">Theoretical</option>
        <option value="building">Building</option>
        <option value="built">Built</option>
        <option value="retired">Retired</option>
      </select>
      <fieldset>
        <legend>Art:</legend>
        <label htmlFor="image">Image src: </label>
        <input type="text" name="image" id="image" />
        <label htmlFor="img_attribution">Attribution: </label>
        <input type="text" name="img_attribution" id="img_attribution" />
      </fieldset>
      <fieldset>
        <legend>Platform:</legend>
        <input type="radio" name="digital" id="paper" value="false" />
        <label htmlFor="paper">Paper</label>
        <input type="radio" name="digital" id="arena" value="true" />
        <label htmlFor="arena">Arena</label>
      </fieldset>
    </form>
  )
}

import { ChangeEvent, FormEvent, useState } from 'react'
import { addGameToGlobal } from '../actions/Actions'
import { postGame } from '../apis/gamesApi'
import { useAppDispatch } from '../hooks/redux'

function Gamesearch() {
  const [addGame, setAddGame] = useState('')
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddGame(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newGame = addGame
    return postGame(newGame).then(([addedGame]) => {
      dispatch(addGameToGlobal(addedGame))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Game</h3>
      <label htmlFor="game-search">Game data from <a href="https://rawg.io/">rawg.io</a></label>
      <input
        id="game-search"
        name="search"
        value={addGame}
        onChange={handleChange}
      ></input>
      <button type="submit">Go</button>
    </form>
  )
}


export default Gamesearch
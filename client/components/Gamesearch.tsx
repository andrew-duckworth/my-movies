import { ChangeEvent, FormEvent, useState } from 'react'
import { addGameToGlobal } from '../actions/Actions'
import { postGame } from '../apis/gamesApi'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Gamesearch() {
  const [addGame, setAddGame] = useState('')
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddGame(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newGame = addGame
    setAddGame('')
    return postGame(newGame).then(([addedGame]) => {
      dispatch(addGameToGlobal(addedGame))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="px-4 pt-6 text-2xl font-bold">Add a Game</h3>
      <div className="p-4 pb-10 label-input-search">
        <label
          className='className="text-base font-semibold leading-7 text-gray-900"'
          htmlFor="game-search"
        >
          Game data from <a href="https://rawg.io/">rawg.io</a>
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="game-search"
          name="search"
          value={addGame}
          onChange={handleChange}
        ></input>
      </div>
      <button
        className="search-btn py-2 px-4 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75"
        type="submit"
      >
        Go
      </button>
    </form>
  )
}

export default Gamesearch

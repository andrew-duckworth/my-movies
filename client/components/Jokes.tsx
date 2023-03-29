import { useEffect } from 'react'
import Joke from './Joke'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getJokesFromAPI } from '../actions'

function Jokes() {
  const dispatch = useAppDispatch()
  const jokes = useAppSelector((state) => state.jokes)

  useEffect(() => {
    dispatch(getJokesFromAPI())
  })

  return (
    <div>
      <h2>Jokes</h2>
      <button className="button button__joke__add">
        Add a classic to the collection
      </button>
      <ul>
        {jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </ul>
    </div>
  )
}
export default Jokes

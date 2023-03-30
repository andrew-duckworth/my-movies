import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { addNewJoke } from '../actions'
import { useNavigate } from 'react-router-dom'

function AddJoke() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [userJoke, setUserJoke] = useState({ joke: '', punchline: '' })

  const handleJokeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserJoke({ ...userJoke, [evt.target.id]: evt.target.value })
  }

  const handleJokeSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log(userJoke)
    dispatch(addNewJoke(userJoke))
    setUserJoke({ joke: '', punchline: '' })
    navigate('/jokes')
  }

  return (
    <form onSubmit={handleJokeSubmit}>
      <label htmlFor="joke">enter your joke:</label>
      <input
        id="joke"
        name="joke"
        type="text"
        value={userJoke.joke}
        onChange={handleJokeChange}
      />
      <label htmlFor="punchline">enter your punchline:</label>
      <input
        id="punchline"
        name="punchline"
        type="text"
        value={userJoke.punchline}
        onChange={handleJokeChange}
      />
      <br />
      <button type="submit">Add this joke</button>
    </form>
  )
}
export default AddJoke

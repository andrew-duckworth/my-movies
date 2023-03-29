import { ChangeEvent, useState } from 'react'

function AddJokes() {
  const [userJoke, setUserJoke] = useState('')

  const handleJokeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserJoke(evt.target.value)
  }
  return (
    <form>
      <label htmlFor="joke">enter your joke:</label>
      <input
        id="joke"
        name="joke"
        type="text"
        value={userJoke}
        onChange={handleJokeChange}
      />
    </form>
  )
}
export default AddJokes

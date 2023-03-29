import { ChangeEvent, FormEvent, useState } from 'react'

function AddJoke() {
  const [userJoke, setUserJoke] = useState('')

  const handleJokeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserJoke(evt.target.value)
  }

  const handleJokeSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    //add joke to db
    //add joke to redux store
    //thunk?
  }

  return (
    <form onSubmit={handleJokeSubmit}>
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
export default AddJoke

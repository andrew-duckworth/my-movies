import { fetchJokes } from '../apis/jokeApi'
import { useEffect, useState } from 'react'
import { Joke as JokeType } from '../../common/models'
import Joke from './Joke'

function Jokes() {
  const [jokes, setJokes] = useState([] as JokeType[])

  useEffect(() => {
    fetchJokes()
      .then((jokes) => {
        setJokes(jokes)
      })
      .catch((err) => console.log(err.message))
  }, [])
  return (
    <div>
      <h2>Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </ul>
    </div>
  )
}
export default Jokes

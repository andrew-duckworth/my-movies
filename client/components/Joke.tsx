import { Joke as JokeType } from '../../common/models'
import { useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { removeOldJoke } from '../actions'

interface Props {
  joke: JokeType
}

function Joke({ joke }: Props) {
  const [punchlineVisible, setPunchlineVisible] = useState(false)
  const dispatch = useAppDispatch()

  const togglePunchline = () => setPunchlineVisible(!punchlineVisible)

  const deleteOnClick = () => dispatch(removeOldJoke(joke.id)) //write thunk!

  return (
    <div>
      <p>{joke.joke}</p>
      {!punchlineVisible && (
        <button className="button button__joke__show" onClick={togglePunchline}>
          Gimme the punchline!
        </button>
      )}
      {punchlineVisible && (
        <>
          <p>{joke.punchline}</p>
          <button
            className="button button__joke__hide"
            onClick={togglePunchline}
          >
            *groan*
          </button>
        </>
      )}
      <button className="button button__joke__delete" onClick={deleteOnClick}>
        I&apos;ve had enough, delete this knee-slapper!
      </button>
    </div>
  )
}
export default Joke

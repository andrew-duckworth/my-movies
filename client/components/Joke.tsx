import { Joke as JokeType } from '../../common/models'

interface Props {
  joke: JokeType
}

function Joke({ joke }: Props) {
  return (
    <div>
      <p>{joke.joke}</p>
    </div>
  )
}
export default Joke

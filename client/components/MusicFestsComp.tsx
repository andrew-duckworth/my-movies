import { useAppDispatch, useAppSelector } from '../hooks/redux'

function MusicFestivals() {
  const musicFestivals = useAppSelector(
    (globalState) => globalState.musicFestRdcrs
  )

  console.log('In components >>>' + musicFestivals)
  return (
    <div>
      <h1>Here is where the music fests be at:</h1>
      <p>temp hardcoded data</p>
      <p>Whoa, we&apos;re going to Ibiza</p>
      <p>Rampage Belgium</p>
      <ul>
        {musicFestivals.map((fest) => (
          <li key={fest.name}>{fest.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MusicFestivals

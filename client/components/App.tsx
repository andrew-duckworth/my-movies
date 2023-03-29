import { useAppSelector } from '../hooks/redux'
import MusicFestivals from './MusicFestsComp'

function App() {
  const musicFestivals = useAppSelector((state) => state.musicFestRdcrs)

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">something something</section>
      <MusicFestivals />
    </>
  )
}

export default App

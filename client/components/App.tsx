import { useAppSelector } from '../hooks/redux'
import MusicFestivals from './MusicFestsComp'

function App() {
  // const musicFestivals = useAppSelector((state) => state.musicFestRdcrs)

  return (
    <>
      <header className="header"></header>
      <section className="main"></section>
      <MusicFestivals />
    </>
  )
}

export default App

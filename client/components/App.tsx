import { useAppSelector } from '../hooks/redux'
import AddFest from './AddFestForm'
import MusicFestivals from './MusicFestsComp'

function App() {
  // const musicFestivals = useAppSelector((state) => state.musicFestRdcrs)

  return (
    <>
      <header className="header"></header>
      <section className="main"></section>
      <MusicFestivals />
      <AddFest />
    </>
  )
}

export default App

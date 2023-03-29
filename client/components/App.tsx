import { useAppSelector } from '../hooks/redux'
import MusicFestivals from './MusicFestsComp'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
      <MusicFestivals />
    </>
  )
}

export default App

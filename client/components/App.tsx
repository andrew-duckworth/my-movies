import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import DeckForm from './DeckForm'
import Decks from './Decks'
import ErrorMessage from './ErrorMessage'

function App() {
  const decks = useAppSelector((state) => state.decks)
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <ErrorMessage />
      <section className="main">
        <Routes>
          <Route path="/" element={<Decks decks={decks} />} />
          <Route path="/add" element={<DeckForm />} />
          <Route path="/:id" element={<DeckForm />} />
        </Routes>
      </section>
    </>
  )
}

export default App

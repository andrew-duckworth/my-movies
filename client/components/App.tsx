import { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { getDecks } from '../actions/decks'
import { useAppDispatch } from '../hooks/redux'
import EditForm from './EditDeck'
import AddForm from './AddDeck'
import Decks from './Decks'
import ErrorMessage from './ErrorMessage'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDecks())
  })
  return (
    <>
      <header className="header">
        <NavLink to="/">
          <h1>My Collection</h1>
        </NavLink>
      </header>
      <ErrorMessage />
      <section className="main">
        <Routes>
          <Route path="/" element={<Decks />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/:id" element={<EditForm />} />
        </Routes>
      </section>
    </>
  )
}

export default App

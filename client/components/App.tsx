import { Route, Routes, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'

import AddMovie from './AddMovie'
import MovieList from './MovieList'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Movie Fullstack</h1>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movie</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/addmovie" element={<AddMovie />}></Route>
      </Routes>
    </>
  )
}

export default App

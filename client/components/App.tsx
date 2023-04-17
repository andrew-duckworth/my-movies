// import { fetchAllGames } from '../apis'
import { Route, Routes, Link } from 'react-router-dom'
import { GameList } from './GameList'
import { AddGame } from './AddGame'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { getThunk } from '../actions/gameActions'

function App() {
  // const [games, setGames] = useState([] as Models.Game[])

  // old
  // useEffect(() => {
  //   console.log('hi')
  //   fetchAllGames()
  //     .then((gamesArr) => {
  //       setGames(gamesArr)
  //     })
  //     .catch((err) => {
  //       alert(err.message)
  //     })
  // }, [])
  // moved to Game component as a useEffect
  // const handleClick = () => {
  //   fetchAllGames()
  // }
  const dispatch = useAppDispatch()

  // this is breaking my code idk why ask kelly?

  useEffect(() => {
    dispatch(getThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>Game Collection</h1>
      </header>
      <div className="add">
        <AddGame />
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Game</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/add" element={<AddGame />} />
        </Routes> */}
      </div>
      <div className="container">
        <GameList />
      </div>
    </>
  )
}

export default App

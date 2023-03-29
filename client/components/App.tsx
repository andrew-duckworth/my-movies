// import { fetchAllGames } from '../apis'
import { Game } from './Game'

function App() {
  // moved to Game component as a useEffect
  // const handleClick = () => {
  //   fetchAllGames()
  // }
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <Game />
      {/* <button onClick={handleClick}>test data sends</button> */}
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App

import { useEffect } from 'react'
import { Game } from '../../common/interfaces'
import { displayGames, deleteGame } from '../actions/Actions'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Games() {
  const games = useAppSelector((globalState) => globalState.games)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayGames())
    // get element by class
    // loop over images with a conditional checking naturalWidth
    // if it is 1, replace with placeholder image
  }, [dispatch])

  function delHandler(id: number) {
    dispatch(deleteGame(id))
  }

  return (
    <>
      <h2>Games</h2>
      <div className="games-cont">
        {games ? (
          games.map((game: Game) => (
            <div key={game.id} className="game-cont">
              <h3>{game.name}</h3>
              <p className="game-subtitle, game-released">
                Release date: {game.released}
              </p>
              <img
                className="game-subtitle, game-image h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                src={game.image}
                alt="Game cover"
              ></img>
              <div className="p-10">
              <button
                className="w-8 h-8 rounded-full 
                bg-red-500 hover:bg-red-600 text-white"
                onClick={() => delHandler(game.id)}
              >
                X
              </button>
              </div>
            </div>
          ))
        ) : (
          <p>NO GAMES! PANIC!!!</p>
        )}
      </div>
    </>
  )
}

export default Games

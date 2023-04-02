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
      <h2 className="text-4xl font-bold">Games</h2>
      <div className="games-cont grid-cols-2 place-content-center gap-8 border-b-4 pb-5">
        {games ? (
          games.map((game: Game) => (
            <div
              key={game.id}
              className="game-cont grid-cols-2 place-content-center gap-8 overflow-hidden"
            >
              <div className="game-topline-cont">
                <button
                  className="game-delbtn game-topline w-8 h-8 rounded-full hover:bg-red-800 text-white"
                  onClick={() => delHandler(game.id)}
                >
                  X
                </button>
                <img
                  className="game-topline game-subtitle, game-image h-auto  rounded-lg shadow-xl"
                  src={game.image}
                  alt={`${game.name} cover`}
                ></img>
              </div>
              <div className="game-bottomline px-6 py-4">
                <h3 className="font-semibold text-gray-900 text-xl">
                  {game.name}
                </h3>
                <p className="game-subtitle, game-released">
                  Released: {game.released}
                </p>
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

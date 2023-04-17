import { useAppSelector } from '../hooks/redux'
import * as Models from '../../common/game'
import { ListGame } from './ListGame'

export function GameList() {
  const gamesDb = useAppSelector((state) => state.gameReducer as Models.Game[])

  return (
    <>
      <div className="game-container">
        {gamesDb.map((gameObj) => (
          <ListGame key={gameObj.id} gameObj={gameObj} />
        ))}
      </div>
    </>
  )
}

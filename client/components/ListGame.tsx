import { Game } from '../../common/game'
import { delThunk } from '../actions/gameActions'
import { useAppDispatch } from '../hooks/redux'

export function ListGame({ gameObj }: { gameObj: Game }) {
  const dispatch = useAppDispatch()

  // const handleDelete = async (id: number) => {
  //   await dispatch(delThunk(id))
  // }

  const handleDelete = () => {
    console.log(gameObj.id)
    dispatch(delThunk(gameObj.id))
      .then(() => {})
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <div className="game">
        <h2>{gameObj.title}</h2>
        <img src={gameObj.cover} alt={`cover for the game ${gameObj.title}`} />
        <p>Dev: {gameObj.dev}</p>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BigThree } from '../../common/Starsign'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { delOneUserThunk, getUsersThunk } from '../actions/zodiac'

interface Props {
  singleUser: BigThree
}

function ChartList({ singleUser }: Props) {
  const dispatch = useAppDispatch()
  const chartList = useAppSelector((state) => state.bigthree as BigThree[])

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

  const deleteHandler = () => {
    dispatch(delOneUserThunk(singleUser.id))
  }

  return (
    <section>
      <div className="description">
        <h2>What is a big three?</h2>
        <h3>
          A person&apos;s big three refers to their sun, moon, and rising
          placements in their natal chart. These are general indicators for a
          person&apos;s personality, without tyring to understand their entire
          chart.
        </h3>
      </div>
      <div>
        <div className="users">
          {chartList.map((user) => (
            <div className="users__each" key={user.id}>
              <h2>{user.name}</h2>
              <div className="text-item">
                <h3>Sun: </h3>
                <p>{user.sun}</p>
              </div>
              <div className="text-item">
                <h3>Moon: </h3>
                <p>{user.moon}</p>
              </div>
              <div className="text-item">
                <h3>Rising: </h3>
                <p>{user.rising}</p>
              </div>
              <p>What does this mean?</p>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          ))}
          <div className="nav-button">
            <Link to="/add">Add Yours</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChartList

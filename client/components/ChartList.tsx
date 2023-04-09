import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Models from '../../common/Starsign'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
  delOneUserThunk,
  getUsersThunk,
  updOneUserThunk,
} from '../actions/zodiac'

function ChartList() {
  const dispatch = useAppDispatch()
  const chartList = useAppSelector(
    (state) => state.bigthree as Models.BigThree[]
  )
  const [editForm, setEditForm] = useState(false)
  const [editData, setEditData] = useState({
    sun: '',
    moon: '',
    rising: '',
  } as Models.BigThree)

  const deleteHandler = (id: number) => {
    dispatch(delOneUserThunk(id))
  }

  const updateButtonHandler = (user: Models.BigThree) => {
    setEditData(user)
    setEditForm(!editForm)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(updOneUserThunk(editData))
    setEditForm(!editForm)
  }

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

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
          {editForm ? (
            <form onSubmit={submitHandler}>
              <div className="text-item">
                <label htmlFor="newSun">Sun Sign: </label>
                <input
                  type="text"
                  value={editData.sun}
                  name="sun"
                  onChange={changeHandler}
                />
              </div>
              <div className="text-item">
                <label htmlFor="newMoon">Moon Sign: </label>
                <input
                  type="text"
                  value={editData.moon}
                  name="moon"
                  onChange={changeHandler}
                />
              </div>
              <div className="text-item">
                <label htmlFor="newRising">Rising Sign: </label>
                <input
                  type="text"
                  value={editData.rising}
                  name="rising"
                  onChange={changeHandler}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div>
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
                  <div className="button">
                    <Link to="/info">What does this mean?</Link>
                  </div>
                  <button onClick={() => deleteHandler(user.id)}>Delete</button>
                  <button onClick={() => updateButtonHandler(user)}>
                    Update
                  </button>
                </div>
              ))}
              <div className="nav-button">
                <Link to="/add">Add Yours</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ChartList

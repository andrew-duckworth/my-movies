import { ChangeEvent, FormEvent, useState } from 'react'
import { UserChartData } from '../../common/Starsign'
import { useAppDispatch } from '../hooks/redux'
import { addOneUserThunk } from '../actions/zodiac'
import { useNavigate } from 'react-router-dom'

function AddChart() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({} as UserChartData)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(addOneUserThunk(user))
    navigate('/chart')
  }

  return (
    <section>
      <div className="add">
        <h2>Enter your big three: </h2>
        <form onSubmit={submitHandler}>
          <div className="text-item">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={user.name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div className="text-item">
            <label htmlFor="newSun">Sun Sign: </label>
            <input
              type="text"
              value={user.sun}
              name="sun"
              onChange={changeHandler}
            />
          </div>
          <div className="text-item">
            <label htmlFor="newMoon">Moon Sign: </label>
            <input
              type="text"
              value={user.moon}
              name="moon"
              onChange={changeHandler}
            />
          </div>
          <div className="text-item">
            <label htmlFor="newRising">Rising Sign: </label>
            <input
              type="text"
              value={user.rising}
              name="rising"
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default AddChart

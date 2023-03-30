import { ChangeEvent, FormEvent, useState } from 'react'
import { addUser } from '../actions/zodiac'

export function AddChart() {
  const [data, setData] = useState({
    newName: '',
    newSun: '',
    newMoon: '',
    newRising: '',
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault
    data && dispatch(addUser(data))
    setData('')
  }

  return (
    <div className="add">
      <h2>Enter your big three: </h2>
      <form onSubmit={submitHandler}>
        <div className="text-item">
          <label htmlFor="name">newName: </label>
          <input
            type="text"
            value={data.newName}
            name="newName"
            onChange={changeHandler}
          />
        </div>
        <div className="text-item">
          <label htmlFor="newSun">Sun Sign: </label>
          <input
            type="text"
            value={data.newSun}
            name="newSun"
            onChange={changeHandler}
          />
        </div>
        <div className="text-item">
          <label htmlFor="newMoon">Moon Sign: </label>
          <input
            type="text"
            value={data.newMoon}
            name="newMoon"
            onChange={changeHandler}
          />
        </div>
        <div className="text-item">
          <label htmlFor="newRising">Rising Sign: </label>
          <input
            type="text"
            value={data.newRising}
            name="rnewRising"
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

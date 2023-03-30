import { ChangeEvent, FormEvent, useState } from 'react'

export function AddChart() {
  const [data, setData] = useState({
    name: '',
    sun: '',
    moon: '',
    rising: '',
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault
    // dispatch(addSigns())
  }

  return (
    <div className="add">
      <h2>Enter your big three: </h2>
      <form onSubmit={submitHandler}>
        <div className="text-item">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={data.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className="text-item">
          <label htmlFor="sunSign">Sun Sign: </label>
          <input
            type="text"
            value={data.sun}
            name="sun"
            onChange={changeHandler}
          />
        </div>
        <div className="text-item">
          <label htmlFor="moonSign">Moon Sign: </label>
          <input
            type="text"
            value={data.moon}
            name="moon"
            onChange={changeHandler}
          />
        </div>
        <div className="text-item">
          <label htmlFor="risingSign">Rising Sign: </label>
          <input
            type="text"
            value={data.rising}
            name="rising"
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

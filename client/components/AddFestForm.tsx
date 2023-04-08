import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { MusicFestivalData } from '../../common/musicFestivalsTypes'
import { ADD_FEST } from '../actions/musicFestival'

export default function AddFest() {
  const dispatch = useAppDispatch()
  const [fest, setFest] = useState()

  const handleChange = (evt: ChangeEvent<HTMLImageElement>) => {
    setFest({ ...fest, [evt.target.name]: evt.target.value })
  }

  // const for handle submit

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Share with us a new brewing technique</h1>
        <label htmlFor="name">Method Name</label>
        <input
          name="name"
          type="text"
          value={coffeeMethod.name}
          onChange={handleChange}
          placeholder="Your badass brew method"
          required
        />
        <label htmlFor="url">Image Url </label>
        <input
          name="url"
          type="text"
          value={coffeeMethod.url}
          onChange={handleChange}
          placeholder="ex:'https://images....'"
          required
        />
        <label htmlFor="selftext">Short Description </label>
        <textarea
          name="selftext"
          value={coffeeMethod.selftext}
          className="text-input"
          onChange={handleChange}
          placeholder="Max 20 words"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

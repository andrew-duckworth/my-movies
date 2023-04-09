import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import {
  MusicFestivalData,
  MusicFestivalDetails,
} from '../../common/musicFestivalsTypes'
import { addNewMusicFest } from '../actions/musicFestival'

export default function AddFest() {
  const dispatch = useAppDispatch()
  const [fest, setFest] = useState<MusicFestivalDetails>({})

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFest({ ...fest, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = () => {
    return dispatch(addNewMusicFest(fest as MusicFestivalData))
  }
  // const for handle submit

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Add a new festival</h1>
        <label htmlFor="name">Festival Name</label>
        <input
          name="name"
          type="text"
          value={fest.name}
          onChange={handleChange}
          placeholder="Your fest here"
          required
        />
        <label htmlFor="country">Country </label>
        <input
          name="country"
          type="text"
          value={fest.country}
          onChange={handleChange}
          placeholder="eg Iceland"
          required
        />
        <label htmlFor="date">Date </label>
        <input
          name="date"
          type="text"
          value={fest.date}
          onChange={handleChange}
          placeholder="DD MONTH"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// formData life cycle:

// Starts in component. HTML form, useState tracking this

// on submit, function called

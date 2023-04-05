import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchUpdateCoffee } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

interface Props {
  coffee: CoffeeData
}

export default function UpdateForm({ coffee }: Props) {
  const dispatch = useAppDispatch()
  const id = coffee.id
  const [updatedCoffee, setUpdatedCoffee] = useState({} as CoffeeData)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUpdatedCoffee({
      ...updatedCoffee,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(fetchUpdateCoffee(id, updatedCoffee))
  }

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>{updatedCoffee.name}</h1>
        <label htmlFor="name">Method Name</label>
        <input
          name="name"
          id="name"
          type="text"
          value={updatedCoffee.name}
          onChange={handleChange}
          placeholder="Your badass brew method"
          required
        />
        <label htmlFor="url">Image Url </label>
        <input
          name="url"
          id="url"
          type="text"
          value={updatedCoffee.url}
          onChange={handleChange}
          placeholder="ex:'https://images....'"
          required
        />
        <label htmlFor="selftext">Short Description </label>
        <textarea
          name="selftext"
          id="selftext"
          value={updatedCoffee.selftext}
          className="text-input"
          onChange={handleChange}
          placeholder="Max 20 words"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

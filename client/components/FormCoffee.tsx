import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchAddCoffee, fetchSetCoffee } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

function AddMethodForm() {
  const dispatch = useAppDispatch()

  const [pic, setPic] = useState(null as null | File)
  const [coffeeMethod, setMethods] = useState({
    name: '',
    url: '',
    selftext: '',
  } as CoffeeData)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setMethods({ ...coffeeMethod, [name]: value })
  }

  const updateFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileArr = e.target.files as FileList
    const file = fileArr[0]
    setPic(file)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(fetchAddCoffee(coffeeMethod))
      .then(() => {
        setTimeout(() => {
          dispatch(fetchSetCoffee())
        }, 1800)
      })
      .catch((err) => err.message)
    setMethods({ name: '', url: '', selftext: '' } as CoffeeData)
  }

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
          type="file"
          value={coffeeMethod.url}
          onChange={handleChange}
          placeholder="ex:https://images...."
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

export default AddMethodForm

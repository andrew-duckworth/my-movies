import { ChangeEvent, FormEvent, useState } from 'react'
import { Manga } from '../../common/manga'
import { addManga } from '../actions/manga'
import { useEffect } from 'react'
import { addMangaApi } from '../apis/manga'
import { useAppDispatch } from '../hooks/redux'

function AddManga() {
  const dispatch = useAppDispatch()
  const [addFormData, setAddFormData] = useState({
    title: '',
    books: '',
    author: '',
    location: '',
    imageSrc: '',
  })

  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    addMangaApi(addFormData)
      .then((manga) => {
        dispatch(addManga(manga))
      })
      .then(() => {
        location.href = '/'
      })
      .catch((err) => console.log(err))
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFormData({ ...addFormData, [e.target.id]: e.target.value })
  }

  return (
    <div className="card-container">
      <div className="card front">
        <h2>Add Manga</h2>
        <form onSubmit={clickHandler} className="addmanga-form">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={changeHandler}
            value={addFormData.title}
            required
          />
          <br />
          <label htmlFor="books">Books (単行本): </label>
          <input
            type="text"
            id="books"
            name="books"
            onChange={changeHandler}
            value={addFormData.books}
            required
          />
          <br />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={changeHandler}
            value={addFormData.author}
            required
          />
          <br />
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={changeHandler}
            value={addFormData.location}
            required
          />
          <br />
          <label htmlFor="imageSrc">Online Image Source: </label>
          <input
            type="text"
            id="imageSrc"
            name="imageSrc"
            onChange={changeHandler}
            value={addFormData.imageSrc}
            required
          />
          <br />
          <button className="addmanga-button">Add Manga</button>
        </form>
        <button onClick={() => (location.href = '/')}>Close</button>
      </div>
    </div>
  )
}

export default AddManga

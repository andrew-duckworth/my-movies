import { ChangeEvent, FormEvent, useState } from 'react'
// import { Manga } from '../../common/manga'
import { addManga } from '../actions/manga'
// import { useEffect } from 'react'
import { addMangaApi } from '../apis/manga'
import { useAppDispatch } from '../hooks/redux'
// import { GridForm, ColOne, ColTwoText } from './Styles'

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
          <table>
            <tr>
              <td>
                <label htmlFor="title">Title: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={changeHandler}
                  value={addFormData.title}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="books">Books (単行本): </label>
              </td>
              <td>
                <input
                  type="text"
                  id="books"
                  name="books"
                  onChange={changeHandler}
                  value={addFormData.books}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="author">Author: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="author"
                  name="author"
                  onChange={changeHandler}
                  value={addFormData.author}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="location">Location: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="location"
                  name="location"
                  onChange={changeHandler}
                  value={addFormData.location}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="imageSrc">Online Image Source: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="imageSrc"
                  name="imageSrc"
                  onChange={changeHandler}
                  value={addFormData.imageSrc}
                  required
                />
              </td>
            </tr>
          </table>
          <br />
          <button className="addmanga-button">Add Manga</button>
        </form>
        <br />
        <button onClick={() => (location.href = '/')}>Close</button>
      </div>
    </div>
  )
}

export default AddManga

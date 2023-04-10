import { ChangeEvent, FormEvent, useState } from 'react'
import { Manga } from '../../common/manga'
import { updateManga, toggleEdit, deleteManga } from '../actions/manga'
import { useEffect } from 'react'
import { updateMangaApi } from '../apis/manga'
import { useAppDispatch } from '../hooks/redux'

interface Props {
  id: number | undefined
  title: string
  books: string
  author: string
  location: string
  imageSrc: string
}

function EditManga({ id, title, books, author, location, imageSrc }: Props) {
  const dispatch = useAppDispatch()
  const [editFormData, setEditFormData] = useState({
    id: id,
    title: title,
    books: books,
    author: author,
    location: location,
    imageSrc: imageSrc,
  })

  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    updateMangaApi(String(id), editFormData)
      .then((manga) => {
        dispatch(updateManga(manga))
      })
      .then(() => {
        dispatch(toggleEdit(String(id)))
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = () => {
    dispatch(deleteManga(String(id)))
  }

  const handleClose = () => {
    dispatch(toggleEdit(String(id)))
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditFormData({ ...editFormData, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h2>Edit Manga</h2>
      <form onSubmit={clickHandler} className="editmanga-form">
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
                value={editFormData.title}
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
                value={editFormData.books}
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
                value={editFormData.author}
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
                value={editFormData.location}
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
                value={editFormData.imageSrc}
                required
              />
            </td>
          </tr>
        </table>
        <br />
        <button className="editmanga-button">Edit Manga</button>
      </form>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <br />
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default EditManga

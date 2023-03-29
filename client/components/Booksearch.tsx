import { ChangeEvent, FormEvent, useState } from 'react'
import { addBookToGlobal } from '../actions/bookAction'
import { postBook } from '../apis/booksApi'
import { useAppDispatch } from '../hooks/redux'
import { Book } from '../../common/interfaces'

function Booksearch() {
  const [addBook, setAddBook] = useState('')
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddBook(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    return postBook(addBook).then(([addedBook]) => {
      console.log(addedBook)
      dispatch(addBookToGlobal(addedBook))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Book</h3>
      <label htmlFor="book-search">Open Library Search</label>
      <input
        id="book-search"
        name="search"
        value={addBook}
        onChange={handleChange}
      ></input>
      <button type="submit">Go</button>
    </form>
  )
}

export default Booksearch

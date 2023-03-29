import { ChangeEvent, FormEvent, useState } from 'react'
import { postBook } from '../apis/booksApi'

function Booksearch() {
  const [addBook, setAddBook] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddBook(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    postBook(addBook)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Book</h3>
      <label htmlFor="book-search">Search the Open Library</label>
      <input
        id="book-search"
        name="search"
        value={addBook}
        onChange={handleChange}
      ></input>
    </form>
  )
}

export default Booksearch

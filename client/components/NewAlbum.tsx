import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { AlbumsInterface } from '../common/albums'
import { addNewAlbumThunk } from '../actions/albumAction'

function NewAlbumForm() {
  const dispatch = useAppDispatch()

  const [newAlbum, setNewAlbum] = useState({} as AlbumsInterface)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAlbum({
      ...newAlbum,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('handleSubmit')
    dispatch(addNewAlbumThunk(newAlbum))
  }
  // const [allAlbums, setAllAlbums] = useState([] as string[])
  // const [newAlbum, setNewAlbum] = useState('')

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault()
  //   setAllAlbums([newAlbum, ...allAlbums])
  //   setNewAlbum('')
  // }

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setNewAlbum(event.target.value)
  // }
  // const [formData, setFormData] = useState({
  //   name: '',
  //   year: '',
  //   image: '',
  // })

  return (
    <>
      <h3>Has Taylor Swift released a new album?</h3>
      <h4>Enter in the details of the new album below!</h4>
      <div style={{ display: 'flex' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              value={newAlbum.name}
              type="string"
              onChange={changeHandler}
              required
            />

            <label htmlFor="year">Year: </label>
            <input
              id="year"
              name="year"
              value={newAlbum.year}
              type="number"
              onChange={changeHandler}
              required
            />
            <br></br>
            <label htmlFor="image">Album cover: </label>
            <input
              id="image"
              name="image"
              value={newAlbum.image}
              onChange={changeHandler}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
    // <div>
    //   <h3>Has Taylor Swift released a new album?</h3>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="newAlbum">Add Taylor Swift&apos;s new album!</label>
    //     <br></br>
    //     <input id="newAlbum" value={newAlbum} onChange={handleChange} />
    //     <button>Submit</button>
    //   </form>
    //   <div>
    //     {allAlbums.map((albums) => (
    //       <p key={albums}>{albums}</p>
    //     ))}
    //   </div>
    // </div>
  )
}

export default NewAlbumForm

import { useEffect } from 'react'
import { deleteAlbumThunk, getAlbumsThunk } from '../actions/albumAction'
import { useAppDispatch } from '../hooks/redux'
import { useAppSelector } from '../hooks/redux'

function Albums() {
  // const [albums, setAlbums] = useState([] as AlbumsInterface[])
  const dispatch = useAppDispatch()
  const albums = useAppSelector((state) => state.albumReducer)

  const handleDelete = (id: number) => {
    dispatch(deleteAlbumThunk(id))
      .then(() => {
        dispatch({
          type: 'DEL_ALBUM',
          payload: id,
        })
      })
      .catch((err) => alert(err.message))
  }

  useEffect(() => {
    dispatch(getAlbumsThunk())
  }, [dispatch])
  return (
    <div>
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <br></br>
            <p>Album name: {album.name}</p>
            <p>Year of release: {album.year}</p>
            <img src={album.image} alt={'Cover of ' + album.name} />
            <br></br>
            <button
              className="delete-btn"
              onClick={() => handleDelete(album.id)}
            >
              Delete this album
            </button>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default Albums

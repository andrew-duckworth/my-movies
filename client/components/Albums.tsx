import { useEffect } from 'react'
import { getAlbumsThunk } from '../actions/albumAction'
import { useAppDispatch } from '../hooks/redux'
import { useAppSelector } from '../hooks/redux'

function Albums() {
  // const [albums, setAlbums] = useState([] as AlbumsInterface[])
  const dispatch = useAppDispatch()
  const albums = useAppSelector((state) => state.albumReducer)

  // useEffect(() => {
  //   getAllAlbums()
  //     .then((albumsArr) => {
  //       setAlbums(albumsArr)
  //     })
  //     .catch((err) => console.log(err.message))
  // }, [])
  useEffect(() => {
    dispatch(getAlbumsThunk())
  }, [])
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
          </div>
        )
      })}
    </div>
  )
}

export default Albums

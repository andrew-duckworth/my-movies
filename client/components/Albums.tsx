import {useState, useEffect } from 'react'
import { AlbumsInterface } from '../common/albums'
import { getAllAlbums } from '../apis/apiClient'

function Albums() {
  const [albums, setAlbums] = useState(null as AlbumsInterface[] | null)

  useEffect(() => {
    getAllAlbums()
    .then((albumsArr) => {
      setAlbums(albumsArr)
    })
    .catch((err) => console.log(err.message))
  }, [])

  return (
    {Albums.map((album) => {
      return(
        <div key={album.id}>
        <p>{album.name}</p>
        <p>{album.year}</p>
        <p>{album.image}</p>
        </div>
      )
    })}
  )
}

export default Albums
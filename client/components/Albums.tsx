import { useState, useEffect } from 'react'
import { AlbumsInterface } from '../common/albums'
import { getAllAlbums } from '../apis/apiClient'

function Albums() {
  const [albums, setAlbums] = useState([] as AlbumsInterface[])

  useEffect(() => {
    getAllAlbums()
      .then((albumsArr) => {
        setAlbums(albumsArr)
      })
      .catch((err) => console.log(err.message))
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

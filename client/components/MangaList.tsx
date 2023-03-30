import { useAppSelector } from '../hooks/redux'
import mangaReducer from '../reducers/manga'

import Manga from './Manga'

function MangaList() {
  const allMangas = useAppSelector((state) => state.mangaReducer)
  return (
    <div>
      {allMangas.map((manga) => (
        <Manga
          key={manga.id}
          title={manga.title}
          books={manga.books}
          author={manga.author}
          location={manga.location}
          imageSrc={manga.imageSrc}
        />
      ))}
    </div>
  )
}

export default MangaList

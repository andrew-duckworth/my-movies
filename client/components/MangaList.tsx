import { useAppSelector } from '../hooks/redux'

import Manga from './Manga'

function MangaList() {
  const allMangas = useAppSelector((state) => state.allMangas)
  return (
    <div>
      {allMangas.map((manga, i) => (
        <Manga
          key={i}
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

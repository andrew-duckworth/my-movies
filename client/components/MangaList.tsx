import { useAppSelector, useAppDispatch } from '../hooks/redux'
import mangaReducer from '../reducers/manga'
import { useEffect, useState, FormEvent, ChangeEvent } from 'react'

import Manga from './Manga'
import { getAllManga } from '../apis/manga'

function MangaList() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllManga())
  }, [])

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

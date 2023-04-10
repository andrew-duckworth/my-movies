import { useAppSelector, useAppDispatch } from '../hooks/redux'
// import mangaReducer from '../reducers/manga'
import { fetchAllManga } from '../actions/manga'
import { useEffect, useState, FormEvent, ChangeEvent } from 'react'

import Manga from './Manga'
import EditManga from './EditManga'

function MangaList() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllManga())
  }, [])

  const allMangas = useAppSelector((state) => state.mangaReducer)
  return (
    <>
      <div className="card-container">
        <button onClick={() => (location.href = '/manga/add')}>
          Add Manga
        </button>
      </div>
      <div className="card-container">
        {allMangas.map((manga) => {
          // console.log(manga.edit)
          return (
            <div className="card front" key={manga.id}>
              {manga.edit ? (
                <EditManga
                  id={manga.id}
                  title={manga.title}
                  books={manga.books}
                  author={manga.author}
                  location={manga.location}
                  imageSrc={manga.imageSrc}
                />
              ) : (
                <Manga
                  id={manga.id}
                  title={manga.title}
                  books={manga.books}
                  author={manga.author}
                  location={manga.location}
                  imageSrc={manga.imageSrc}
                />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MangaList

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchMusicFests } from '../actions/musicFestival'
import { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import type { MusicFestivalDetails } from '../../common/musicFestivalsTypes'

function MusicFestivals() {
  const dispatch = useAppDispatch()

  const festsFromStore: MusicFestivalDetails[] = useAppSelector(
    (state) => state.musicFestRdcrs
  )

  useEffect(() => {
    dispatch(fetchMusicFests())
  }, [dispatch])

  return (
    <>
      <h1>Oh the Festivals I&apos;ll Go:</h1>

      {festsFromStore.map((singleFest: MusicFestivalDetails, index: number) => {
        return (
          <div key={singleFest.id ?? index}>
            <h2>{singleFest.name}</h2>
            <p>
              {singleFest.country} - {singleFest.date}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default MusicFestivals

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
      <h1>Here is where the music fests be at:</h1>

      {festsFromStore.map((singleFest: MusicFestivalDetails, index: number) => {
        return (
          <div key={singleFest.id ?? index}>
            <h2>{singleFest.name}</h2>
            <p>
              {singleFest.country} - {singleFest.date} - {singleFest.id}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default MusicFestivals

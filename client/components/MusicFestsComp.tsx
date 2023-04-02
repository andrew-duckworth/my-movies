import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchMusicFests } from '../actions/musicFestival'
import { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import type { MusicFestivalDetails } from '../../common/musicFestivalsTypes'

function MusicFestivals() {
  const dispatch = useAppDispatch()

  const festsFromStore = useAppSelector((state) => state.musicFestRdcrs)
  const firstFestName = festsFromStore[0].name
  console.log(festsFromStore)
  useEffect(() => {
    dispatch(fetchMusicFests())
  }, [dispatch])

  return (
    <>
      <div>
        <h1>Here is where the music fests be at:</h1>
        <p>temp hardcoded data</p>
        <p>Whoa, we&apos;re going to Ibiza</p>

        {festsFromStore.map((singleFest: MusicFestivalDetails) => {
          return (
            <div key={singleFest.id}>
              <h2>{singleFest.name}</h2>

              <p>{singleFest.country}</p>
              <p>{singleFest.date}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MusicFestivals

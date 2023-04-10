import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { fetchAllHamsters } from '../actions/hamsters'
import UpdateHamster from './UpdateHamster'

function HamsterList() {
  const dispatch = useAppDispatch()
  const hamsters = useAppSelector((state) => state.hamsters)

  const allHamsters = () => {
    dispatch(fetchAllHamsters())
  }

  useEffect(() => {
    allHamsters()
  }, [])

  return (
    <>
      <div className="hamsters">
        <ul>
          {hamsters.map((hamster) => (
            <li key={hamster.id}>
              <UpdateHamster name={hamster.name} id={hamster.id} />
              <img src={`./${hamster.image}`} alt={hamster.name} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HamsterList

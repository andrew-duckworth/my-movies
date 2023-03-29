import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { fetchAllHamsters } from '../actions/hamsters'
import UpdateHamster from './UpdateHamster'

function HamsterList(props: Props) {
  const dispatch = useAppDispatch()
  const hamsters = useAppSelector((state) => state.hamsters)

  useEffect(() => {
    dispatch(fetchAllHamsters())
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
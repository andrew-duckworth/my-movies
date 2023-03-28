import { useAppDispatch } from '../hooks/redux'
import { ReactNode, useState, ChangeEvent, useEffect } from 'react'
import { getHamsters } from '../apis/apiClient'
import { Hamsters } from '../../models/hamster'

import { fetchHamsters } from '../apis/hammies'

function HamsterList() {
  const dispatch = useAppDispatch()
  const [hamsters, setHamsters] = useState([] as Hamsters[])

  useEffect(() => {
    dispatch(fetchHamsters())
      .then((data) => {
        setHamsters(data)
      })
      .catch((err) => alert(err.message))
  }, [])

  return (
    <>
      <div className="hamsters">
        {
          <ul>
            {hamsters.map((hamster) => (
              <li key={hamster.id}>
                {hamster.name}{' '}
                <img src={`./${hamster.image}`} alt={hamster.name} />
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  )
}

export default HamsterList

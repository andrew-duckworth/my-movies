import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes } from '../apis/apiClient'
import { fetchHikes } from '../actions/hikes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Hikes() {
  const [hikes, setHikes] = useState(null as HikesInterface[] | null)
  const dispatch = useAppDispatch()
  const data = useAppSelector((globalState) => globalState.hikes)
  useEffect(() => {
    // Make a varible for being able to use the useAppSelector from the store
    // dispatch(
    //   fetchHikes()
    //   // Make button
    // )
    //   getAllHikes() //Set local State
    //     .then((hikesArr) => {
    //       setHikes(hikesArr)
    //     })
    //     .catch((err) => console.log(err.message))
  }, [])

  const button = () => {
    dispatch(fetchHikes())
  }

  return (
    <div>
      <button className="button" onClick={button}>
        Show Hikes
      </button>
      {/* Button (onClick) dispatch*/}
      {/* Get info from stroe, load on page */}
      {data &&
        data?.map((hike) => {
          return (
            <div key={hike.id}>
              <p>{hike.name}</p>
              <p>{hike.location}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Hikes

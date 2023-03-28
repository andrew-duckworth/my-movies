import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes } from '../apis/apiClient'

function Hikes() {
  const [hikes, setHikes] = useState(null as HikesInterface[] | null)

  useEffect(() => {
    getAllHikes()
      .then((hikesArr) => {
        setHikes(hikesArr)
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div>
      {hikes &&
        hikes?.map((hike) => {
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

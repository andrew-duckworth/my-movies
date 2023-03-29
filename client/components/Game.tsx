import { fetchAllGames } from '../apis'
import { useState, useEffect } from 'react'
import * as Models from '../../common/game'

export function Game() {
  const [games, setGames] = useState([] as Models.Game[])

  useEffect(() => {
    console.log('hi')
    fetchAllGames()
      .then((gamesArr) => {
        setGames(gamesArr)
      })
      .catch((err) => {
        alert(err.message)
      })
  }, [])

  const handleDel = (id: number) => {
    console.log(id)
  }

  return (
    <div>
      <p>will be a list of games</p>
      {games.map((games) => {
        return (
          <div key={games.id}>
            <h3>{games.title}</h3>
            <img src={games.cover} alt="should be something" />
            <ul>
              {/* <li>Id: {games.id}</li> */}
              <li>Dev: {games.dev}</li>
              {/* <li>Cover: {games.cover}</li> */}
            </ul>
            <button onClick={() => handleDel(games.id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

import { useEffect, useState } from 'react'

import { getTeamsApi } from '../apis/clientApi'

import { TeamsData } from '../../models/Teams'

// import Team from './Team'
// import Teams from './Teams'
import Header from './Header'

function App() {
  const [teams, setTeams] = useState([] as TeamsData[])

  useEffect(() => {
    getTeamsApi()
      .then((data) => {
        // console.log(data)
        setTeams(data)
        // console.log(teams)
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <>
      <h1>Teams</h1>
      {teams.map((team) => (
        <div key={team.name}>
          <h2>{team.name}</h2>
          <img src={team.logo} alt={team.name} />
          <p>Manager: {team.manager}</p>
          <p>City: {team.city}</p>
          <br />
        </div>
      ))}
    </>
  )
}

export default App

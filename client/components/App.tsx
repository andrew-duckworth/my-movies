import { useEffect, useState } from 'react'

import { getTeamsApi } from '../apis/clientApi'

import { TeamsData } from '../../models/Teams'

import { fetchTeams } from '../actions/teams'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

// import Team from './Team'
// import Teams from './Teams'
import Header from './Header'

function App() {
  const dispatch = useAppDispatch()
  // const [teams, setTeams] = useState([] as TeamsData[])

  const teams = useAppSelector((state) => state.teams)

  // console.log(teams)

  // useEffect(() => {
  //   getTeamsApi()
  //     .then((data) => {
  //       // console.log(data)
  //       setTeams(data)
  //       // console.log(teams)
  //     })
  //     .catch((err) => console.log(err.message))
  // }, [])

  // const clickHandler = () => {
  //   getTeamsApi()
  //     .then((data) => {
  //       // console.log(data)
  //       setTeams(data)
  //       // console.log(teams)
  //     })
  //     .catch((err) => console.log(err.message))
  // }

  return (
    <>
      <Header />
      <button onClick={() => dispatch(fetchTeams())}>button</button>
      {teams &&
        teams.map((team) => (
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

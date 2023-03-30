import { useEffect, useState } from 'react'

import { deleteTeamsApi, getTeamsApi } from '../apis/clientApi'

import { TeamsData } from '../../models/Teams'

import { fetchTeams, deleteTeams, deleteTeamsThunk } from '../actions/teams'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

// import Team from './Team'
// import Teams from './Teams'
import Header from './Header'
import AddTeam from './AddTeam'

function App() {
  const dispatch = useAppDispatch()
  // const [teams, setTeams] = useState([] as TeamsData[])

  const teams = useAppSelector((state) => state.teams)

  const showIndicator = useAppSelector((state) => state.waiting)

  const deleteHandler = (team: TeamsData) => {
    console.log(team)
    deleteTeamsApi(team)
      .then(() => dispatch(fetchTeams()))
      .catch((err) => console.log(err.message))
  }

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

  // https://i.gifer.com/ZZ5H.gif

  return (
    <>
      <Header />
      <AddTeam />
      <button onClick={() => dispatch(fetchTeams())}>button</button>
      {showIndicator && (
        <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" />
      )}
      {teams &&
        teams.map((team) => (
          <div key={team.name}>
            <h2>{team.name}</h2>
            <img src={team.logo} alt={team.name} />
            <p>Manager: {team.manager}</p>
            <p>City: {team.city}</p>
            <button onClick={() => deleteHandler(team)}>x</button>
            <br />
          </div>
        ))}
    </>
  )
}

export default App

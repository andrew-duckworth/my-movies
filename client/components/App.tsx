import { useEffect, useState } from 'react'

import { deleteTeamsApi, getTeamsApi } from '../apis/clientApi'

import { TeamsData } from '../../models/Teams'

import { fetchTeams, deleteTeam, deleteTeamsThunk } from '../actions/teams'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { store } from '../store'

// import Team from './Team'
// import Teams from './Teams'
import Header from './Header'
import AddTeam from './AddTeam'
import Teams from './Teams'

function App() {
  const dispatch = useAppDispatch()
  // const [teams, setTeams] = useState([] as TeamsData[])

  const teams = useAppSelector((state) => state.teams)

  useEffect(() => {
    dispatch(fetchTeams())
  }, [dispatch])

  // subscribe to the store changes
  useEffect(() => {
    // your code to update the list of teams on the front-end
    // console.log('teams updated:', teams)
  }, [teams])

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
      {/* <button onClick={() => dispatch(fetchTeams())}>button</button> */}
      <Teams />
    </>
  )
}

export default App

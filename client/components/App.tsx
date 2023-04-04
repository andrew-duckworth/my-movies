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
  useEffect(() => {}, [teams])

  const [selectedTeam, setSelectedTeam] = useState<TeamsData | null>(null)

  return (
    <>
      <Header />
      <AddTeam selectedTeam={selectedTeam} />
      {/* <button onClick={() => dispatch(fetchTeams())}>button</button> */}
      <Teams setSelectedTeam={setSelectedTeam} />
    </>
  )
}

export default App

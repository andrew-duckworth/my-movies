import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { deleteTeamsApi } from '../apis/clientApi'

import { deleteTeam } from '../actions/teams'

import { TeamsData } from '../../models/Teams'

export default function Teams() {
  const dispatch = useAppDispatch()

  const teams = useAppSelector((state) => state.teams)

  const showIndicator = useAppSelector((state) => state.waiting)

  const deleteHandler = (team: TeamsData) => {
    console.log(team)
    deleteTeamsApi(team)
      .then(() => dispatch(deleteTeam(team)))
      .catch((err) => console.log(err.message))
  }

  const updateHandler = (team: TeamsData) => {
    console.log(team)
  }

  return (
    <>
      <h1>😬 List of Teams: 😬</h1>
      <div className="teams-container">
        {showIndicator && (
          <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" />
        )}
        {teams &&
          teams.map((team) => (
            <div className="team-container" key={team.name}>
              <h2>{team.name}</h2>
              <img src={team.logo} alt={team.name} />
              <p>Manager: {team.manager}</p>
              <p>City: {team.city}</p>
              <button onClick={() => deleteHandler(team)}>x</button>
              <button onClick={() => updateHandler(team)}>update</button>
              <br />
            </div>
          ))}
      </div>
    </>
  )
}

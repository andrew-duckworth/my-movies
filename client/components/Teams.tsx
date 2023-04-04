import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { FormEvent, ChangeEvent } from 'react'

import { deleteTeamsApi, editTeamsApi } from '../apis/clientApi'

import { deleteTeam, editTeam, editTeamThunk } from '../actions/teams'

import { TeamsData } from '../../models/Teams'
import { useState } from 'react'
import Team from './Team'

interface TeamsProps {
  setSelectedTeam: (team: TeamsData) => void
}

export default function Teams({ setSelectedTeam }: TeamsProps) {
  const [editForm, setEditForm] = useState(false)
  const [editingTeam, setEditingTeam] = useState<TeamsData | null>(null)

  const dispatch = useAppDispatch()

  const teams = useAppSelector((state) => state.teams)

  const showIndicator = useAppSelector((state) => state.waiting)

  const deleteHandler = (team: TeamsData) => {
    setEditForm(false)
    console.log(team)
    deleteTeamsApi(team)
      .then(() => dispatch(deleteTeam(team)))
      .catch((err) => console.log(err.message))
  }

  const updateButtonHandler = (team: TeamsData) => {
    console.log('updated handler clicked', team)
    setEditingTeam(team)
    setEditForm(!editForm)
    setEditFormData(team)
  }

  const editHandler = (e: FormEvent, team: TeamsData) => {
    e.preventDefault()
    console.log('edit handler clicked', team)
    console.log('formdata is', editFormData)
    // dispatch(editTeamThunk(editFormData))
    editTeamsApi(editFormData)
      .then((team) => dispatch(editTeam(team)))
      .catch((err) => console.log(err.message))
    setEditingTeam(null)
    setEditForm(!editForm)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // addFormData.e.data.id = e.data.value
    setEditFormData({ ...editFormData, [e.target.id]: e.target.value })
  }

  const [editFormData, setEditFormData] = useState({
    name: '',
    manager: '',
    city: '',
    logo: '',
  })

  return (
    <>
      <h1>😬 List of Teams: 😬</h1>
      {editForm && (
        <div className="edit-form-wrapper">
          <h2>Edit: </h2>
          <form onSubmit={editHandler} className="addteam-form">
            <label htmlFor="name">Team Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
              value={editFormData.name}
              required
            />
            <br />
            <label htmlFor="logo">Logo Url: </label>
            <input
              type="text"
              id="logo"
              name="logo"
              onChange={changeHandler}
              value={editFormData.logo}
              required
            />
            <br />
            <label htmlFor="manager">Manager: </label>
            <input
              type="text"
              id="manager"
              name="manager"
              onChange={changeHandler}
              value={editFormData.manager}
              required
            />
            <br />
            <label htmlFor="city">City: </label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={changeHandler}
              value={editFormData.city}
              required
            />

            <button className="addteam-button">Edit Team</button>
          </form>
        </div>
      )}
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
              <button onClick={() => updateButtonHandler(team)}>update</button>
              <br />
            </div>
          ))}
      </div>
    </>
  )
}

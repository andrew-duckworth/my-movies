import { ChangeEvent, FormEvent, useState } from 'react'
import { TeamsData } from '../../models/Teams'
import { addTeam, fetchTeams } from '../actions/teams'
import { addTeamsApi } from '../apis/clientApi'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

export default function AddTeam() {
  const teams = useAppSelector((state) => state.teams)

  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    name: '',
    manager: '',
    city: '',
    logo: '',
  })

  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    addTeamsApi(formData)
      .then((team) => {
        dispatch(addTeam(team))
        setFormData({
          name: '',
          manager: '',
          city: '',
          logo: '',
        })
      })
      .catch((err) => console.log(err))
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // formData.e.data.id = e.data.value
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={clickHandler} className="addteam-form">
        <label htmlFor="name">Team Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={formData.name}
        />
        <br />
        <label htmlFor="logo">Logo Url: </label>
        <input
          type="text"
          id="logo"
          name="logo"
          onChange={changeHandler}
          value={formData.logo}
        />
        <br />
        <label htmlFor="manager">Manager: </label>
        <input
          type="text"
          id="manager"
          name="manager"
          onChange={changeHandler}
          value={formData.manager}
        />
        <br />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={changeHandler}
          value={formData.city}
        />

        <button className="addteam-button">Add Team</button>
      </form>
    </div>
  )
}

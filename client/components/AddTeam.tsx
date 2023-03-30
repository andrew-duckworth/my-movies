import { ChangeEvent, FormEvent, useState } from 'react'
import { TeamsData } from '../../models/Teams'
import { fetchTeams } from '../actions/teams'
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
      .then(() => dispatch(fetchTeams()))
      .catch((err) => console.log(err.message))
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // formData.e.data.id = e.data.value
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={clickHandler}>
        <label htmlFor="name">Team Name: </label>
        <input type="text" id="name" name="name" onChange={changeHandler} />
        <br />
        <label htmlFor="logo">Logo Url: </label>
        <input type="text" id="logo" name="logo" onChange={changeHandler} />
        <br />
        <label htmlFor="name">Manager: </label>
        <input
          type="text"
          id="manager"
          name="manager"
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="city">City: </label>
        <input type="text" id="city" name="city" onChange={changeHandler} />

        <button>Add Team</button>
      </form>
    </div>
  )
}

import { ChangeEvent, FormEvent, useState } from 'react'
import { TeamsData } from '../../models/Teams'
import { addTeam, fetchTeams } from '../actions/teams'
import { addTeamsApi } from '../apis/clientApi'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

export default function AddTeam() {
  const teams = useAppSelector((state) => state.teams)

  const dispatch = useAppDispatch()

  const [editForm, setEditForm] = useState(false)

  const [addFormData, setAddFormData] = useState({
    name: '',
    manager: '',
    city: '',
    logo: '',
  })

  const clickHandler = (e: FormEvent) => {
    e.preventDefault()
    addTeamsApi(addFormData)
      .then((team) => {
        dispatch(addTeam(team))
        setAddFormData({
          name: '',
          manager: '',
          city: '',
          logo: '',
        })
      })
      .catch((err) => console.log(err))
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // addFormData.e.data.id = e.data.value
    setAddFormData({ ...addFormData, [e.target.id]: e.target.value })
  }

  return (
    <>
      <div className="forms-wrapper">
        <div className="add-form-wrapper">
          <h2>Add: </h2>
          <form onSubmit={clickHandler} className="addteam-form">
            <label htmlFor="name">Team Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
              value={addFormData.name}
              required
            />
            <br />
            <label htmlFor="logo">Logo Url: </label>
            <input
              type="text"
              id="logo"
              name="logo"
              onChange={changeHandler}
              value={addFormData.logo}
              required
            />
            <br />
            <label htmlFor="manager">Manager: </label>
            <input
              type="text"
              id="manager"
              name="manager"
              onChange={changeHandler}
              value={addFormData.manager}
              required
            />
            <br />
            <label htmlFor="city">City: </label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={changeHandler}
              value={addFormData.city}
              required
            />

            <button className="addteam-button">Add Team</button>
          </form>
        </div>
        {editForm && (
          <div className="edit-form-wrapper">
            <h2>Edit: </h2>
            <form onSubmit={clickHandler} className="addteam-form">
              <label htmlFor="name">Team Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={changeHandler}
                value={formData.name}
                required
              />
              <br />
              <label htmlFor="logo">Logo Url: </label>
              <input
                type="text"
                id="logo"
                name="logo"
                onChange={changeHandler}
                value={formData.logo}
                required
              />
              <br />
              <label htmlFor="manager">Manager: </label>
              <input
                type="text"
                id="manager"
                name="manager"
                onChange={changeHandler}
                value={formData.manager}
                required
              />
              <br />
              <label htmlFor="city">City: </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={changeHandler}
                value={formData.city}
                required
              />

              <button className="addteam-button">Edit Team</button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

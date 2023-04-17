import { useAppDispatch } from '../hooks/redux'
import { addThunk } from '../actions/gameActions'
import { ChangeEvent, FormEvent, useState } from 'react'
import { GameDetails } from '../../common/game'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export function AddGame() {
  const dispatch = useAppDispatch()

  const [form, setForm] = useState({} as GameDetails)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    console.log(form)
    e.preventDefault()
    return dispatch(addThunk(form))
  }

  return (
    <>
      <div className="add-form-container">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 0.9, width: '27ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            onChange={changeHandler}
            label="Title"
            id="title"
            value={form.title || ''}
            variant="filled"
            className="textField"
            required
          />
          <TextField
            onChange={changeHandler}
            label="Dev"
            id="dev"
            value={form.dev || ''}
            variant="filled"
            className="textField"
            required
          />
          <TextField
            onChange={changeHandler}
            label="Cover Image"
            id="cover"
            value={form.cover || ''}
            variant="filled"
            className="textField"
            required
          />
          <button type="submit" className="addButton">
            Add
          </button>
        </Box>
      </div>
    </>
  )
}

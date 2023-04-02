import express from 'express'
import { addTeam, delTeam, getTeams } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getTeams()
    .then((teams) => {
      res.json(teams)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const numId = Number(id)
  try {
    await delTeam(numId)
    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error!!!!!!')
  }
})

router.post('/', (req, res) => {
  const newTeam = {
    name: req.body.name,
    manager: req.body.manager,
    city: req.body.city,
    logo: req.body.logo,
  }
  addTeam(newTeam)
    .then((addedTeam) => {
      res.json(addedTeam)
    })
    .catch((err) => console.log(err.message))
})

export default router

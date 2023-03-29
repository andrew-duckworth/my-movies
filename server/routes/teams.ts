import express from 'express'
import { delTeam, getTeams } from '../db/db'

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

router.delete('/teams/:id', async (req, res) => {
  const { id } = req.params

  try {
    await delTeam(Number(id))
    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router

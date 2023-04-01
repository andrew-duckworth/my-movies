import express from 'express'
import { getAllGames, deleteGame, addGame } from '../db/db'
import { Game, Gamedata } from '../../common/interfaces'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  return getAllGames().then((games: Game[]) => res.json(games))
})

router.post('/', (req, res) => {
  const gameData: Gamedata = req.body
  return addGame(gameData).then((addedGame: Game) => {
    res.json(addedGame)
  })
})

router.delete('/', (req, res) => {
  const id = Number(req.body.id)
  return deleteGame(id).then((response) => {
    return res.json(response)
  })
})

export default router


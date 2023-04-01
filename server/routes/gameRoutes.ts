import express from 'express'
import { getAllGames, deleteGame, addGame } from '../db/db'
import { Game, Gamedata } from '../../common/interfaces'
import request from 'superagent'

const server = express()

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  return getAllGames().then((games: Game[]) => res.json(games))
})

router.post('/', (req, res) => {
  console.log('posted')
  const key = '&key=f5d35997743c4c2ca13f7f8936a30ef8'
  const gameData = {
    name: '',
    released: '',
    image: '',
  }

  return request
    .get(`https://rawg.io/api/games/?search=${req.body.searchStr}${key}`)
    .then((rawData) => {
      console.log(rawData.body.results[0])
      gameData.name = rawData.body.results[0].name
      gameData.released = rawData.body.results[0].released
      gameData.image = rawData.body.results[0].background_image
      return addGame(gameData)
    })
    .then((addedGame: Game) => {
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

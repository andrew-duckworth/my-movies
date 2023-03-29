import express from 'express'
import request from 'superagent'

const router = express.Router()
const db = require('../db/db')

router.use(express.json())

router.get('/', (req, res) => {
  db.getAllAlbums()
    .then((albums) => {
      res.json(albums)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export default router

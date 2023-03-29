import express from 'express'
import request from 'superagent'

const router = express.Router()
const db = require('../db/db')

router.use(express.json())

router.get('/', (req, res) => {
  db.getAllAlbums()
})

export default router

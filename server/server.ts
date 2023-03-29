import express from 'express'
import path from 'path'

import decksAPI from './routes/api_v1'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/decks', decksAPI)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

export default server

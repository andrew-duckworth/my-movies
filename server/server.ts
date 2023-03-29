import { join } from 'node:path'
import express from 'express'
// import path from 'path'

import manga from './routes/manga'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1', manga)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

export default server

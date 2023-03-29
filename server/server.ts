import { join } from 'node:path'
import express from 'express'
import path from 'path'

import musicFestivalRoutes from './routes/musicFestivals'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/musicFestivals', musicFestivalRoutes)

server.get('*', (req, res) => {
  res.status(404).send('404 - react incoming')
})

export default server

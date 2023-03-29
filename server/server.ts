import express from 'express'
import path from 'path'
import movies from './routes/movies'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/movies', movies)

server.use('/v1/*', (req, res) => res.sendStatus(404))

export default server

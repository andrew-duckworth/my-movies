import express from 'express'
import path from 'path'
import movie from './routes/movie'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/movies', movie)

export default server

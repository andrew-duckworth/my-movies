import express from 'express'
import path from 'path'
import bookRoutes from './routes/bookRoutes'
import gameRoutes from './routes/gameRoutes'
import './env'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', bookRoutes)
server.use('/api/v1/games', gameRoutes)
export default server

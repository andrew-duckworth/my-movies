import express from 'express'
import path from 'path'
import albums from './routes/albums'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/albums', albums)
export default server

import express from 'express'
import path from 'path'
import hikes from './routes/hikes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/hikes', hikes)

export default server

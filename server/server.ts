import express from 'express'
import path from 'path'
import coffee from './routes/coffee'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/coffee', coffee)

export default server

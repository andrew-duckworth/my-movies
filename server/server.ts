import express from 'express'
import path from 'path'
import { router as jokeRouter } from './routes/jokes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/database', jokeRouter)

server.get('*', (request, response) => {
  response.sendFile(__dirname, '/public/index.html')
})

export default server

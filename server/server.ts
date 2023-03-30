import express from 'express'
import path from 'path'
import { router as jokeRouter } from './routes/jokes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/database/jokes', jokeRouter)

server.get('*', (_, response) => {
  response.sendFile(path.join(__dirname, '/public/index.html'))
})

export default server

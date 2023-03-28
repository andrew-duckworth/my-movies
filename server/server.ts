import express from 'express'
import path from 'path'
import { join } from 'node:path'
import teams from './routes/teams'

const server = express()
server.use(express.static(join(__dirname, 'public')))
server.use(express.json())

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.get('*', (req, res) => {
//   res.sendFile(join(__dirname, './public/index.html'))
// })

server.use('/teams', teams)

export default server

import express from 'express'
import path from 'path'

import { router as familyRouter } from './routes/dbRoute'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// can sometimes have the main home page running through here. But best put through routes

server.use('/api/v1/family', familyRouter)

export default server

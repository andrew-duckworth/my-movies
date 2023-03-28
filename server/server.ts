import { join } from 'node:path'
import express from 'express'
import path from 'path'

// import cors, { CorsOptions } from 'cors'

//Routes:
import hamsters from './routes/hamsters'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//Use Routes:
server.use('/api/v1/hamsters', hamsters)
// server.use(cors('*' as CorsOptions))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

export default server

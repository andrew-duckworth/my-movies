import express from 'express'
import path from 'path'
import bigthree from './routes/bigthree'
import starsigns from './routes/starsigns'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/starsigns', starsigns)
server.use('/api/v1/bigthree', bigthree)

export default server

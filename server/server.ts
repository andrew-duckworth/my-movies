import express from 'express'
import path from 'path'
import bigthree from './routes/bigthree'
import starsigns from './routes/starsigns'
import chart from './routes/chart'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/starsigns', starsigns)
server.use('/api/v1/bigthree', bigthree)
server.use('/api/v1/details', chart)

// Wildcard route
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server

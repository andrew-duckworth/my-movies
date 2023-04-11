import express from 'express'
import path from 'path'
import userchart from './routes/user-chart'
import starsigns from './routes/starsigns'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/starsigns', starsigns)
server.use('/api/v1/usercharts', userchart)

// Wildcard route
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server

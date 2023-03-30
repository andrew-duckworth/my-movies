import express from 'express'
import path from 'path'

import shows from './routes/shows'
import schedule from './routes/scheduler'
// import placeholder from './routes/placeholder'
import producer from './routes/producers'
import schedulerthunk from './routes/schedulerthunk'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

server.get('/testingapiroute', (req, res) => {
  const placeholderstrings = ['this is the home route', 'slashy', '/']
  const rando = Math.floor(Math.random() * placeholderstrings.length)
  res.json({ placeholderstrings: placeholderstrings[rando] })
})

// server.get('/', (req, res) => {})

// server.use('/testform')

server.use('/api/v1/shows', shows)
// server.use('/', placeholder)
server.use('/api/v1/scheduler', schedule)
server.use('/api/v1/producers', producer)
server.use('/schedule')
server.use('schedulethunk', schedulerthunk)
// server.use('/',)
// server.use('*', placeholder)

export default server

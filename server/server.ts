import express from 'express'
import path from 'path'
import { join } from 'node:path'

import recipes from './routes/recipes'
import ingredients from './routes/ingredients'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/recipes', recipes)
server.use('/api/v1/ingredients', ingredients)

// EXAMPLE INTERNAL API -------------------------------------------------------------------------------

// server.get('/diseases', (req, res) => {
//   const diseases = [`1`, `2`, `3`]
//   const index = Math.floor(Math.random() * diseases.length)
//   console.log(index)
//   res.json({ disease: diseases[index] })
// })

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, '/public/index.html'))
})

export default server

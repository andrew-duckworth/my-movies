import express from 'express'
import path from 'path'
import { join } from 'node:path'
// import cors, { CorsOptions } from 'cors'
// import request from 'superagent'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

// EXAMPLE INTERNAL API -------------------------------------------------------------------------------

// server.get('/diseases', (req, res) => {
//   const diseases = [`1`, `2`, `3`]
//   const index = Math.floor(Math.random() * diseases.length)
//   console.log(index)
//   res.json({ disease: diseases[index] })
// })

// EXAMPLE EXTERNAL CORS API --------------------------------------------------------------------------

// server.use(cors('*' as CorsOptions)) <- put this at the top

// server.get('/affirmations', (req, res) => {
//   request
//     .get('https://www.affirmations.dev/')
//     .then((response) => {
//       res.header('Access-Control-Allow-Origin', '*')
//       res.json({ affirmation: response.body.affirmation })
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500).json({ error: 'Failed to fetch affirmation' })
//     })
// })

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, '/public/index.html'))
})

export default server

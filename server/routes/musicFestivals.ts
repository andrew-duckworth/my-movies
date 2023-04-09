import { Router } from 'express'
import express from 'express'
import { addFestivalDb, getAllFestivals } from '../db/musicFestivalsDb'

const router = Router()

router.use(express.json())

router.get('/', (req, res) => {
  getAllFestivals()
    .then((festivals) => {
      return res.json(festivals)
    })
    .catch((err) => res.status(500).send(err.message))
})

router.post('/add', (req, res) => {
  addFestivalDb(req.body)
    .then(() => {
      return res.end()
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

export default router

// import { Router } from 'express'
// import express from 'express'
// import { getAllFestivals } from '../db/musicFestivalsDb'
// import request from 'superagent'

// const router = Router()

// router.use(express.json())

// router.get('/', (req, res) => {
//   request
//   getAllFestivals()
//   console
//     .log('At route stage')
//     .then((festivals) => {
//       return res.json(festivals)
//     })
//     .catch((err) => res.status(500).send(err.message))
// })

// export default router

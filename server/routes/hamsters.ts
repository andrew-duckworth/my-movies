import { Router } from 'express'
// import request from 'superagent'

const router = Router()

import { getAllHamsters, updHamsters } from '../db/connection'

router.get('/', (req, res) => {
  getAllHamsters()
    .then((hamsters) => {
      res.json(hamsters)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  console.log('send route data:', id, name)
  updHamsters(id, name)
    .then((dataArr) => {
      res.json(dataArr[0])
      console.log('returned route data:', dataArr[0])
    })
    //db func returns vvvvvvvv
    // .then((data) => {
    //   console.log('returned route data:', data)
    //   res.sendStatus(200)
    // })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router

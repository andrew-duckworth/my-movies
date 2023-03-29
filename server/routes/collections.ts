//ROUTES//

import express from 'express'
//import all db functions - select, insert, patch, delete (crud)
import {getCollectionsBD, getANoteBD} from '../db/connection'
const router = express.Router()


router.get('/', (req, res) => {
    getCollectionsBD()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
})

router.get('/:id', (req, res) => {
  getANoteBD(+req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

  export default router
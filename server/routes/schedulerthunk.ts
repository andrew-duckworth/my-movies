import { Router } from 'express'
import express from 'express'
import request from 'superagent'
import bodyparser from 'body-parser'
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  console.log('5: in the sever api call')

  request
    .get('http://localhost:3000/api/v1/scheduler/allschedule') // external api call
    .then((e) => {
      const bodyparsejson = bodyparser.json(e)
      console.log('6: quote resp: ', bodyparsejson)

      return bodyparsejson // use res.json on server side
    })
    .catch((err) => console.log(err.message))
})

export default router

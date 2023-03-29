import { response } from 'express'
import request from 'superagent'
import { CoffeeData } from './models/Coffee'

export function getAllCoffee(): Promise<CoffeeData[]> {
  return request.get('/api/v1/coffee').then((res) => res.body)
}

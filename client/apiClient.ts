import request from 'superagent'
import { CoffeeData } from './models/Coffee'

export function getAllCoffee(): Promise<CoffeeData[]> {
  return request.get('/api/v1/coffee').then((res) => res.body)
}

export function addCoffee(newCoffee: CoffeeData): Promise<CoffeeData> {
  return request
    .post('/api/v1/coffee')
    .send(newCoffee)
    .then((res) => {
      return res.body
    })
}

export function updateCoffee(coffee: CoffeeData) {
  return request
    .patch(`/api/v1/coffee/${coffee.id}`)
    .send(coffee)
    .then((res) => {
      return res.body
    })
}

export function deleteCoffee(coffeeId: number): Promise<number> {
  return request.del(`/api/v1/coffee/${coffeeId}`).then((res) => res.body)
}

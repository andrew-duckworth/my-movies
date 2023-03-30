import request from 'superagent'

import { Manga } from '../../common/manga'

export function getAllManga(): Promise<Manga[]> {
  return request
    .get('/api/v1')
    .then((res) => {
      res.body.forEach((manga: string) => validateNoSnakeCase(manga))
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1'))
}

export function addManga(manga: Manga): Promise<Manga> {
  return request
    .post('/api/v1')
    .send(manga)
    .then((res) => {
      validateNoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1'))
}

export function updateManga(id: string, changedManga: Manga) {
  return request
    .patch(`/api/v1/${id}`)
    .send(changedManga)
    .then((res) => {
      validateNoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('PATCH', '/api/v1/:id'))
}

export function deleteManga(id: number): Promise<unknown> {
  return request
    .del(`/api/v1/${id}`)
    .then((res) => res)
    .catch(errorHandler('DELETE', '/api/v1/:id'))
}

export function getMangaById(id: number): Promise<Manga> {
  return request
    .get(`/api/v1/${id}`)
    .then((res) => {
      validateNoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1/:id'))
}

// Error handling and validation
function errorHandler(method: string, route: string) {
  return (err: Error) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}

function validateNoSnakeCase(response: string | Comment) {
  const hasSnakeCase = Object.keys(response).some((key) => key.includes('_'))
  if (hasSnakeCase) {
    throw Error('Error: you should not be returning properties in snake_case')
  }
}

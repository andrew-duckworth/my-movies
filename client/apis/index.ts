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

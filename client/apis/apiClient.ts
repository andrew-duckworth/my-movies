// import { response } from 'express/'
import request from 'superagent'
import { MoviesData } from '../models/Movies'

const serverURL = '/v1/movies'

export function getMoviesApi(): Promise<MoviesData> {
  return request.get(serverURL).then((response) => response.body)
}

import { searchForMovie } from './imdb'
import nock from 'nock'

describe('searchForMovie', () => {
  test('returns a list of movies', async () => {
    const results = [
      { id: 'tt0120338', resultType: 'movie', image: 'http://www.imdb.com/pretty_picture.jpeg', title: 'Titanic', description: 'A movie about a boat' },
      { id: 'tt0120339', resultType: 'movie', image: 'http://www.imdb.com/pretty_picture.jpeg', title: 'The Matrix', description: 'A movie about a computer' },
    ]

    process.env.IMDB_KEY = '12345'

    const scope = nock('https://imdb-api.com/en/API/SearchMovie')
      .get('/12345/titanic')
      .reply(200, { results })

    const result = await searchForMovie('titanic')
    expect(result).toEqual(results)
    expect(scope.isDone()).toBe(true)
  })
})

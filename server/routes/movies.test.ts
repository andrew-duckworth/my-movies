import request from "supertest"
import server from "../server"

const db = require("../db/db")
jest.mock('../db/db', () => {
  return {
    getAllMovies: jest.fn(),
    addMovie: jest.fn(),
  }
})

describe("GET /api/v1/movies", () => {
  test("returns a list of movies", async () => {
    db.getAllMovies.mockResolvedValue([
      { id: 1, imdb_id: "tt0120338", title: "Titanic", image: "http://www.imdb.com/pretty_picture.jpeg", rating: 13 },
      { id: 2, imdb_id: "tt0120339", title: "The Matrix", image: "http://www.imdb.com/pretty_picture.jpeg", rating: 10 },
    ])

    const response = await request(server).get("/api/v1/movies")
    const movies = response.body
    expect(movies).toHaveLength(2)

    expect(movies[0].title).toBe("Titanic")
    expect(movies[1].title).toBe("The Matrix")
  })

  test('sends a 500 status error if the database has a problem', async () => {
    db.getAllMovies.mockRejectedValue(new Error('Database is down'))

    const response = await request(server).get('/api/v1/movies')
    expect(response.status).toBe(500)
    expect(response.text).toBe('DATABASE ERROR: Database is down')
  })
})

describe("POST /api/v1/movies", () => {
  test("adds a movie to the database", async () => {
    const movieDetails = { imdb_id: "tt0120340", title: "The Lion King", image: "http://www.imdb.com/pretty_picture.jpeg", rating: 14 }
    const movieWithId = { id: 1, ...movieDetails }
    
    db.addMovie.mockResolvedValue([movieWithId])

    const response = await request(server).post("/api/v1/movies").send(movieDetails)
    const movie = response.body
    expect(movie).toEqual(movieWithId)
    expect(db.addMovie).toHaveBeenCalledWith(movieDetails)
  })

  test('sends a 500 status error if the database has a problem', async () => {
    db.addMovie.mockRejectedValue(new Error('Database is down'))

    const response = await request(server).post('/api/v1/movies')
    expect(response.status).toBe(500)
    expect(response.text).toBe('DATABASE ERROR: Database is down')
  })
})

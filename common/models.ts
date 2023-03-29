export interface Joke extends UserJoke {
  id: number
}

export interface UserJoke {
  joke: string
  punchline: string
}

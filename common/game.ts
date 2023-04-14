export interface Game extends GameDetails {
  id: number
}

export interface GameDetails {
  title: string
  dev: string
  cover: string
}

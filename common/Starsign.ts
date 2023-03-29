export interface Starsign {
  id?: number
  sign: string
  dates: string
  image: string
}

export type RawStarSignArr = { data: Starsign }[]

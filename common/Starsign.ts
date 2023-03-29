export interface Starsign {
  id?: number
  sign: string
  dates: string
  image: string
}

export type RawStarSignArr = { data: Starsign }[]

export interface BigThree {
  id?: number
  name: string
  sun: string
  moon: string
  rising: string
}

export type RawBigThreeArr = { data: BigThree }[]

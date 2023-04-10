export interface StarsignData {
  name: string
  dates: string
  image: string
}
export interface Starsign extends StarsignData {
  id: number
}
export interface BigThreeData {
  name: string
  sun: string
  moon: string
  rising: string
}

export interface BigThree extends BigThreeData {
  id: number
}

export interface ChartData {
  id?: number
  planet_id: number
  starsign_id: number
  planet?: string
  sign?: string
  verb?: string
  adverb?: string
}

// export interface Chart extends ChartData {
//   id: number
// }

export interface StarsignData {
  sign: string
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

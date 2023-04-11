export interface StarsignData {
  name: string
  dates: string
  image: string
}
export interface Starsign extends StarsignData {
  id: number
}
export interface UserChartData {
  name: string
  sun: string
  moon: string
  rising: string
}

export interface UserChart extends UserChartData {
  id: number
}

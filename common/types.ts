export interface Movie {
  id: number
  title: string
  image: string
  rating?: string
}

export interface ImdbMovie {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}

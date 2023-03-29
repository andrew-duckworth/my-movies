export interface Bookdata {
  title: string
  publish_date: string
  author_name: string
  cover_image?: string
}

export interface Book extends Bookdata {
  id: number
}

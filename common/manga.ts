export interface Manga {
  id?: number
  title: string
  books: string
  author: string
  location: string
  imageSrc: string
  editable: boolean
}

export interface Routemanga extends Manga {
  image_src?: string
}

export type RawMangaArr = { data: Manga }[]

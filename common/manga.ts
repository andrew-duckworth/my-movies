export interface Manga {
  id?: number
  title: string
  books: string
  author: string
  location: string
  imageSrc?: string
}

export interface Routemanga extends Manga {
  image_src?: string
}

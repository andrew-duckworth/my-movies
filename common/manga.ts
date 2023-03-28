export interface Manga {
  id?: number
  title: string
  seriesNum?: number
  author: string
  location: string
  imageSrc?: string
}

export interface Routemanga extends Manga {
  series_num?: number
  image_src?: string
}

import request from 'superagent'
import { Book } from '../../common/interfaces'

export function fetchAllBooks(): Promise<Book[]> {
  return request.get('/api/v1/books').then((bookres) => bookres.body)
}

export function postBook(searchStr: string): Promise<Book> {
  const bookData = {
    title: '',
    author_name: '',
    publish_date: '',
    cover_image: '',
  }
  let isbn = ''
  return request
    .get(`https://openlibrary.org/search.json?q=${searchStr}`)
    .then((rawData) => {
      bookData.title = rawData.body.docs[0].title
      bookData.author_name = rawData.body.docs[0].author_name[0]
      bookData.publish_date = rawData.body.docs[0].publish_date[0]
      isbn = rawData.body.docs[0].isbn[0]
      bookData.cover_image = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`

      return request.post('/api/v1/books').send(bookData)
    })
    .then(
      (res) => res.body
      //
      // cover api
    )
}

/*
export function insertWidget(widgetData: WidgetData): Promise<Widget> {
  return request
    .post(widgetUrl)
    .send(widgetData)
    .then((res) => res.body)
}
*/

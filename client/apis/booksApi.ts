import request from 'superagent'
import { Book, RawBookData } from '../../common/interfaces'

export function fetchAllBooks(): Promise<Book[]> {
  return request.get('/api/v1/books').then((bookres) => bookres.body)
}

export function postBook(searchStr) {
  const bookData = {
    title: '',
    author_name: '',
    publish_date: '',
    cover_image: '',
  }
  return request
    .get(`https://openlibrary.org/search.json?q=${searchStr}`)
    .then((rawData) => {
      bookData.title = rawData.body.docs[0].title
      bookData.author_name = rawData.body.docs[0].author_name
      bookData.publish_date = rawData.body.docs[0].publish_date
    })
    .then(() => {
      // return request.get('')
      // cover api
    })
  return request.post('/api/v1/books').send(bookData)
}

/*
export function insertWidget(widgetData: WidgetData): Promise<Widget> {
  return request
    .post(widgetUrl)
    .send(widgetData)
    .then((res) => res.body)
}
*/

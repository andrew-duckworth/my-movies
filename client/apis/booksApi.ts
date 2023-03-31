import request from 'superagent'
import { Book, Delrequest } from '../../common/interfaces'

export function fetchAllBooks(): Promise<Book[]> {
  return request.get('/api/v1/books').then((bookres) => bookres.body)
}

export function postBook(searchStr: string): Promise<Book[]> {
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
      console.log('requestin')
      bookData.title = rawData.body.docs[0].title
      bookData.author_name = rawData.body.docs[0].author_name[0]
      bookData.publish_date = rawData.body.docs[0].publish_date[0]
      isbn = rawData.body.docs[0].isbn[0]
      bookData.cover_image = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`

      return request.post('/api/v1/books').send(bookData)
    })
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

export function removeBook(id: number): Promise<number | void> {
  return request
    .delete('/api/v1/books')
    .send({ id })
    .then((res) => res.status)
    .catch((err) => {
      console.log(err.message)
    })
}

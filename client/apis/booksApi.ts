import request from 'superagent'
import { Book } from '../../common/interfaces'

export function fetchAllBooks(): Promise<Book[]> {
  return request.get('/api/v1/books').then((bookres) => bookres.body)
}

/*
export function insertWidget(widgetData: WidgetData): Promise<Widget> {
  return request
    .post(widgetUrl)
    .send(widgetData)
    .then((res) => res.body)
}
*/

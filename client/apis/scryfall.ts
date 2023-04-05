import request from 'superagent'
import { throttle } from 'lodash';

@throttle_async(100)
export function getCompletions(name: string): Promise<string[]> {
  return request
    .get(
      `https://api.scryfall.com/cards/autocomplete?q=${encodeURIComponent(
        name
      )}`
    )
    .then((req) => req.body.data)
}

@throttle_async(100)
export function getCardArt(
  name: string
): Promise<{ image: string; img_attribution: string }> {
  return request
    .get(
      `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`
    )
    .then(
      ({
        body: {
          image_uris: { art_crop },
          artist,
        },
      }) => ({ image: art_crop, img_attribution: artist })
    )
}

function throttle_async<Args extends any[], Return>(wait: number) {
  return (func: (...args: Args) => Return) => {
    const throttled = throttle(func, wait)
    return (...args: Args) => {
      const ret = throttled(...args)
      return ret !== undefined ? ret : Promise.reject(Error('Throttled promise returned undefined'))
    }
  }
}
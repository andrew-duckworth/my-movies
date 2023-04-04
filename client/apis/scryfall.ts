import request from 'superagent'

export function getCompletions(name: string): Promise<string[]> {
  return request
    .get(
      `https://api.scryfall.com/cards/autocomplete?q=${encodeURIComponent(
        name
      )}`
    )
    .then((req) => req.body.data)
}

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

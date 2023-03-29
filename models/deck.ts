export interface Deck extends DeckInfo {
  id: number
}

export interface DeckInfo {
  name: string
  format: string
  state: 'theoretical' | 'building' | 'built' | 'retired'
  image: string
  img_attribution: string
}

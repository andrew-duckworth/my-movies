interface List {
  quantity: string
  ingredient: string
}

export interface Ingredients {
  id: number
  list: List
}

export interface Recipes {
  id: number
  title: string
  method: string
  image: string
  ingredients_id: number
}

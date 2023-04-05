interface List {
  quantity: string
  ingredient: string
}

export interface Ingredient {
  id: number
  list: List
}

export interface Recipe {
  id: number
  title: string
  method: string
  image: string
  ingredients_id: number
}

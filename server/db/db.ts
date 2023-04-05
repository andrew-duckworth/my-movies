const config = require('./knexfile').development
const connection = require('knex')(config)
import { Ingredient, Recipe } from '../../models/interface'

export function getAllRecipes(db = connection): Promise<Recipe[]> {
  return db('recipes').select()
}

export function addRecipe(recipe: Recipe, db = connection): Promise<Recipe[]> {
  return db('recipes')
    .insert(recipe)
    .returning(['id', 'title', 'method', 'image'])
}

export function getIngredients(ingredient: Ingredient, db = connection) {
  return db('ingredients')
    .select()
    .where('ingredients.id', ingredient.id)
    .join('recipes', 'ingredients_id', 'ingredients.id')
}

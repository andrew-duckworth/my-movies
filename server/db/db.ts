const config = require('./knexfile').development
const connection = require('knex')(config)
import { Ingredient, Recipe } from '../../models/interface'

// Recipe DBFuncs

export function getAllRecipes(db = connection): Promise<Recipe[]> {
  return db('recipes').select()
}

export function addRecipe(recipe: Recipe, db = connection): Promise<Recipe[]> {
  return db('recipes')
    .insert(recipe)
    .returning(['id', 'title', 'method', 'image'])
}

// Ingredient DBFuncs

export function getIngredients(ingredient: Ingredient, db = connection) {
  return db('ingredients')
    .select()
    .where('ingredients.id', ingredient.id)
    .join('recipes', 'ingredients_id', 'ingredients.id')
}

export function getAllIngredients(db = connection): Promise<Ingredient[]> {
  return db('ingredients').select()
}

export function addIngredients(
  ingredients: Ingredient,
  db = connection
): Promise<Ingredient[]> {
  return db('ingredients').insert(ingredients).returning(['id', 'list'])
}

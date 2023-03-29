const config = require('./knexfile').development
const connection = require('knex')(config)

export function getRecipes(db = connection) {
  return db('titles').select()
}

export function getIngredients(obj, db = connection) {
  return db('ingredients')
    .select()
    .where('ingredients.id', obj.id)
    .join('recipes', 'ingredients_id', 'ingredients.id')
}

import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="links">
      <p>
        <Link className="/recipes" to="/recipes">
          My Recipes
        </Link>
      </p>
      <p>
        <Link className="/addnew" to="/addnew">
          Add Recipe
        </Link>
      </p>
      <p>
        <Link className="/shopping" to="/shopping">
          Shopping List
        </Link>
      </p>
    </div>
  )
}

export default Main

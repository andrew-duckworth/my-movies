import { Route, Routes, useNavigate } from 'react-router-dom'

function Main() {
  const nav = useNavigate()

  const navigate = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    nav(evt.target.name)
  }

  return (
    <div className="buttons">
      <button name="/recipes" onClick={navigate}>
        My Recipes
      </button>
      <button name="/addnew" onClick={navigate}>
        Add Recipe
      </button>
      <button name="/shopping" onClick={navigate}>
        Shopping List
      </button>
    </div>
  )
}

export default Main

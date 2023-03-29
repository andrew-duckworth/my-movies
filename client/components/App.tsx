import { Route, Routes, useNavigate } from 'react-router-dom'

import Nav from './Nav'
import Main from './Main'
import RecipeList from './RecipesList'
import AddRecipe from './AddRecipe'
import Shopping from './Shopping'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/addnew" element={<AddRecipe />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </>
  )
}

export default App

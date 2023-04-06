import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/manga/add">
          <li>Add Manga</li>
        </Link>
      </ul>
    </>
  )
}

export default Nav

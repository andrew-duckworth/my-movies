import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <button onClick={() => (location.href = '/manga/add')}>Add Manga</button>
      {/* <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/manga/add">
          <li>Add Manga</li>
        </Link>
      </ul> */}
    </>
  )
}

export default Nav

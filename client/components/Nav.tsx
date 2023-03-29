import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const { pathname } = useLocation()

  const renderHomeLink = () => <Link to="/">Home</Link>

  return (
    <nav>
      {pathname === '/' ? renderHomeLink() : renderHomeLink()}
      <Link to="/chart">Chart</Link>
    </nav>
  )
}

export default Nav
